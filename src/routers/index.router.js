import { Router } from "express";
import cityRouter from "./city.router.js";

const router = Router()
router.use(cityRouter)


export default router