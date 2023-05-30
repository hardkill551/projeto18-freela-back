import { Router } from "express";
import cityRouter from "./city.router.js";
import hostingRouter from "./hosting.router.js";

const router = Router()
router.use(cityRouter)
router.use(hostingRouter)


export default router