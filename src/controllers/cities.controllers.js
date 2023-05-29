import { getCity, insertCity } from "../repositories/cities.query.js"

export async function postCities(req,res){
    const {city} = req.body
    try {
        await insertCity(city)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCities(req,res){
    try {
        const cities = await getCity()
        res.status(200).send(cities.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}