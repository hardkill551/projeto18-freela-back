import { Router } from "express";
import { getCities, postCities } from "../controllers/cities.controllers.js";

const cityRouter = Router()


cityRouter.post("/cities", postCities)
cityRouter.get("/cities", getCities)



export default cityRouter