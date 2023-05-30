
import { getCityById } from "../repositories/cities.query.js"
import { getHosting, getHostingById, getPhotos, insertHosting, insertPhoto } from "../repositories/hosting.query.js"

export async function postHostings(req,res){
    const {name, description, price, breakfast, city,parking, airConditioning, pool, photos} = req.body
    try {
        const cityId = await getCityById(city)
        await insertHosting(name, description, price, breakfast, parking, cityId.rows[0].id, airConditioning, pool)
        const hosting = await getHostingById(name)
        console.log(hosting.rows)
        photos.map(async (o)=>{
            await insertPhoto(o, hosting.rows[0].id)
        })
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getHostings(req,res){
    try {
        const hostings = await getHosting()
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