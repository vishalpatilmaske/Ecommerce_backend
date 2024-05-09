import Joi from "joi";

const retailerValidationSchema = Joi.object({
  name: Joi.string().required(),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be a valid 10-digit number",
      "any.required": "Phone number is required",
    }),
  location: Joi.string().required(),
  password: Joi.string().required(),

  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address",
    "any.required": "Email is required",
  }),
});

export default retailerValidationSchema;
