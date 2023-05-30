import { getCompanyById } from "../repositories/companies.query.js"

export async function validateCompany(req,res, next){
    const {name} = req.body
    try {
        const sameCity = await getCompanyById(name)
        if(sameCity.rowCount>0) return res.sendStatus(409)
        next()
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}