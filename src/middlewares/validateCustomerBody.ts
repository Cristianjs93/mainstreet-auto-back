import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

function validateCustomerBody(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map((detail) => detail.message);
      res.status(400).json({ status: 400, errors: messages });
      return;
    }
    next();
  };
}

export default validateCustomerBody;
