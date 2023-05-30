import { getCityById } from "../repositories/cities.query.js"

export async function validateCity(req,res, next){
    const {name} = req.body
    try {
        const sameCity = await getCityById(name)
        if(sameCity.rowCount>0) return res.sendStatus(409)
        next()
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}