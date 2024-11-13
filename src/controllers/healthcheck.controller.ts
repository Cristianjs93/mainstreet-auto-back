import { Request, Response } from 'express';

export const healthcheckController = (_: Request, res: Response): void => {
  res.status(200).json({ message: 'Web service is available' });
};
