import joi from "joi"


export const citySchema = joi.object({
    name: joi.string().required(),
})