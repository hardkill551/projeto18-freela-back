import { Router } from "express";
import cityRouter from "./city.router.js";
import hostingRouter from "./hosting.router.js";
import ticketsHosting from "./tickets.router.js";
import companiesRouter from "./companies.router.js";

const router = Router()
router.use(cityRouter)
router.use(hostingRouter)
router.use(ticketsHosting)
router.use(companiesRouter)


export default router