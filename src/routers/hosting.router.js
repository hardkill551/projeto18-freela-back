import { Router } from "express";
import { getHostings, postHostings } from "../controllers/hosting.controllers.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { hostingSchema } from "../schemas/hosting.schema.js";

const hostingRouter = Router()


hostingRouter.post("/hospedagens", validateSchema(hostingSchema), postHostings)
hostingRouter.get("/hospedagens/:city", getHostings)



export default hostingRouter