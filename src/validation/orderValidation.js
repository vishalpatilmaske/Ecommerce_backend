import Joi from "joi";

export const orderValidation = Joi.object({
  retailer_id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  manufacturer_id: Joi.string(),
  transporter_id: Joi.string(),
  products: Joi.array()
    .items(
      Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    )
    .required(),
  quantity: Joi.number().integer().min(1).required(),
  orderValue: Joi.number().min(0).required(),
  mobile: Joi.number().integer().min(1000000000).max(9999999999).required(),
  status: Joi.string()
    .valid("ordered", "manufactured", "delivered", "canceled")
    .required(),
});
