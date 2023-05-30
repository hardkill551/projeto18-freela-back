import { getCompany, insertCompany } from "../repositories/companies.query.js"

export async function postCompanies(req,res){
    const {name} = req.body
    try {
        const x = await insertCompany(name)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCompanies(req,res){
    try {
        const cities = await getCompany()
        res.status(200).send(cities.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}