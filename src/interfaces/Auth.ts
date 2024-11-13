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

export type LoginResponse = {
  code: string;
  customer: { id: string; email: string };
};

export type OtpValidationResponse = {
  token: string;
};