import { NextFunction, Response } from 'express';
import { AuthRequest } from '../../interfaces/Auth';
import AuthService from '../services/auth.services';
import CustomerService from '../../services/customer.service';

async function isAuthenticated(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const headers = req.headers['authorization'];

    if (!headers) {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized! You have to log in first',
      });
    }

    const token = headers.split(' ')[1];

    const decoded = AuthService.verifyToken(token);

    if (!decoded) {
      res
        .status(401)
        .json({ status: 401, message: 'Invalid or expired token' });
    }

    const customer = await CustomerService.getCustomerById(decoded.id);

    req.customer = customer;

    next();
  } catch (error: any) {
    const message = JSON.parse(error.message);
    res.status(message.status).json(message);
  }
}

export default isAuthenticated;
