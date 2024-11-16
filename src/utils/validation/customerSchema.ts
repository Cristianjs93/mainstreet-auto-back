import Joi from 'joi';

export const customerSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'Customer name cannot be empty',
    'string.base': 'Customer name must be a string',
    'any.required': 'Customer name is required',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Customer last name cannot be empty',
    'string.base': 'Customer last name must be a string',
    'any.required': 'Customer last name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Customer email cannot be empty',
    'string.base': 'Customer email must be a string',
    'string.email': 'Customer email must be a valid email address',
    'any.required': 'Customer email is required',
  }),
  customerType: Joi.string().valid('Customer', 'Fleet').required().messages({
    'string.empty': 'Customer type cannot be empty',
    'any.only': 'Customer type must be on of Customer or Fleet',
    'any.required': 'Customer type is required',
  }),
  locationId: Joi.string().required().messages({
    'string.empty': 'Customer office cannot be empty',
    'string.base': 'Customer office must be a string',
    'any.required': 'Customer office is required',
  }),
});
