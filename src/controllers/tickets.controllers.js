
import { getCityById } from "../repositories/cities.query.js"
import { getCompanyById } from "../repositories/companies.query.js"
import { getHosting, getHostingById, getPhotos } from "../repositories/hosting.query.js"
import { getPhotosTickets, getTicket, getTicketById, getTicketsByName, insertPhotoTickets, insertTickets } from "../repositories/tickets.query.js"

export async function postTickets(req,res){
    const {cityDe, cityAr, price, timeDe, timeAr, company, photos} = req.body
    try {
        const cityd = await getCityById(cityDe)
        const citya = await getCityById(cityAr)
        const companyId = await getCompanyById(company)
        
        if(cityd.rowCount<1||cityd.rowCount<1||companyId.rowCount<1) return res.sendStatus(404)
        console.log(companyId.rows)
        await insertTickets(cityd.rows[0].id, citya.rows[0].id, price, timeDe, timeAr, companyId.rows[0].id)
        const tickets = await getTicketsByName(cityd.rows[0].id, citya.rows[0].id, price, timeDe, timeAr, companyId.rows[0].id)
        photos.map(async (o)=>{
            await insertPhotoTickets(o, tickets.rows[0].id)
        })
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTickets(req,res){
    const {cityAr, cityDe} = req.params
    try {
        const citya = await getCityById(cityAr)
        const cityd = await getCityById(cityDe)
        const tickets = await getTicket(citya.rows[0].id,cityd.rows[0].id)
        const photos = await getPhotosTickets()
        const newTickets = tickets.rows.map((o)=>({
            ...o, photos: photos.rows.filter((a)=>{
                if(o.id===a.ticketsId) return a.photo
            })
        }))
        res.status(200).send(newTickets)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTicketsById(req,res){
    const {id} = req.params
    try {
        const tickets = await getTicketById(id)
        if(tickets.rowCount===0) return res.sendStatus(404)
        const photos = await getPhotosTickets()
        const newTickets = tickets.rows.map((o)=>({
            ...o, photos: photos.rows.filter((a)=>{
                if(o.id===a.ticketsId) return a.photo
            })
        }))
        
        res.status(200).send(newTickets)
    } catch (err) {
        res.status(500).send(err.message)
    }
}