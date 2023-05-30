import { Router } from "express";
import { getCities, postCities } from "../controllers/cities.controllers.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/cities.schema.js";
import { validateCity } from "../middlewares/validateCity.middleware.js";

const cityRouter = Router()


cityRouter.post("/cities", validateSchema(citySchema),validateCity,postCities)
cityRouter.get("/cities", getCities)



export default cityRouter