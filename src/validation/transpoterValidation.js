import Joi from "joi";

export const transpoterValidation = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  mobile: Joi.number().integer().min(1000000000).max(9999999999).required(),
});
