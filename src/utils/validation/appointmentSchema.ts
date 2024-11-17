import Joi from 'joi';
import { AppointmentColor } from '../../interfaces/common/appointmentColor.enum';

export const appointmentSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Appointment name cannot be empty',
    'string.base': 'Appointment name must be a string',
    'any.required': 'Appointment name is required',
  }),
  startDate: Joi.string().required().messages({
    'string.empty': 'Appointment start date cannot be empty',
    'string.base': 'Appointment start date must be a string',
    'any.required': 'Appointment start date is required',
  }),
  endDate: Joi.string().required().messages({
    'string.empty': 'Appointment end date cannot be empty',
    'string.base': 'Appointment end date must be a string',
    'any.required': 'Appointment end date is required',
  }),
  color: Joi.string()
    .valid(...Object.values(AppointmentColor))
    .required()
    .messages({
      'string.empty': 'Appointment color cannot be empty',
      'string.base': 'Appointment color must be a string',
      'any.only':
        'Appointment color must be on of aqua, black, blue, brown, gray, green, orange, purple, red, yellow',
      'any.required': 'Appointment color is required',
    }),
  locationId: Joi.string().required().messages({
    'string.empty': 'Appointment office cannot be empty',
    'string.base': 'Appointment office must be a string',
    'any.required': 'Appointment office is required',
  }),
  customerId: Joi.string().required().messages({
    'string.empty': 'Appointment customer cannot be empty',
    'string.base': 'Appointment customer must be a string',
    'any.required': 'Appointment customer is required',
  }),
});
