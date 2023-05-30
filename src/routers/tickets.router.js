import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { ticketsSchema } from "../schemas/tickets.schema.js";
import { getTickets, getTicketsById, postTickets } from "../controllers/tickets.controllers.js";

const ticketsHosting = Router()


ticketsHosting.post("/passagens", validateSchema(ticketsSchema), postTickets)
ticketsHosting.get("/passagens/:cityAr/:cityDe", getTickets)
ticketsHosting.get("/passagens/:cityAr/:cityDe/:id", getTicketsById)



export default ticketsHosting