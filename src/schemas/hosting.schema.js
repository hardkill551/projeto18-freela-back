import joi from "joi"


export const hostingSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    city: joi.string().required(),
    price: joi.number().required(),
    breakfast: joi.boolean(),
    parking: joi.boolean(),
    airConditioning: joi.boolean(),
    pool: joi.boolean(),
    photos:joi.array().required()
})