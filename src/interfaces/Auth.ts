import { Customer } from '@prisma/client';
import { Request } from 'express';

export type PayloadType = {
  id: string;
  email: string;
  iat?: number;
  exp?: number;
};

export interface AuthRequest extends Request {
  customer?: Customer;
}

export type SendOtpResponse = {
  message: string;
  customer: { id: string; email: string };
};

export type LoginResponse = {
  customer: { id: string; email: string; firstName: string; lastName: string };
  token: string;
};
