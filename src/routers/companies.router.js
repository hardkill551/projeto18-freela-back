import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/cities.schema.js";
import { getCompanies, postCompanies } from "../controllers/companies.controllers.js";
import { validateCompany } from "../middlewares/validateCompany.middleware.js";

const companiesRouter = Router()


companiesRouter.post("/companhias", validateSchema(citySchema),validateCompany,postCompanies)
companiesRouter.get("/companhias", getCompanies)



export default companiesRouter