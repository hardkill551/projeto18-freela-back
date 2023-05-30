import joiBase from "joi"
import joiDate from "@joi/date"

const joi = joiBase.extend(joiDate)

export const ticketsSchema = joi.object({
    timeAr: joi.date().format('YYYY-MM-DD HH:mm').required(),
    timeDe: joi.date().format('YYYY-MM-DD HH:mm').required(),
    company: joi.string().required(),
    price: joi.number().required(),
    cityDe: joi.string().required(),
    cityAr: joi.string().required(),
    photos:joi.array().required()
})