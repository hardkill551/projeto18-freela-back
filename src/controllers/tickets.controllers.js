
import { getCityById } from "../repositories/cities.query.js"
import { getCompanyById } from "../repositories/companies.query.js"
import { getHosting, getHostingById, getPhotos } from "../repositories/hosting.query.js"
import { getTicketsByName, insertPhotoTickets, insertTickets } from "../repositories/tickets.query.js"

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
    const {city} = req.params
    try {
        const cityId = await getCityById(city)
        const hostings = await getHosting(cityId.rows[0].id)
        const photos = await getPhotos()
        const newHostings = hostings.rows.map((o)=>({
            ...o, photos: photos.rows.filter((a)=>{
                if(o.id===a.hostingId) return a.photo
            })
        }))
        
        res.status(200).send(newHostings)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTicketsById(req,res){
    const {city, id} = req.params
    try {
        const hostings = await getHostingById(id)
        if(hostings.rowCount===0) return res.sendStatus(404)
        const photos = await getPhotos()
        const newHostings = hostings.rows.map((o)=>({
            ...o, photos: photos.rows.filter((a)=>{
                if(o.id===a.hostingId) return a.photo
            })
        }))
        
        res.status(200).send(newHostings)
    } catch (err) {
        res.status(500).send(err.message)
    }
}