import jwt from 'jsonwebtoken';
import CustomerService from '../../services/customer.service';
import OtpService from '../../services/otp.service';
import { sendOtpEmail } from '../../utils/mailSender';
import {
  LoginResponse,
  OtpValidationResponse,
  PayloadType,
} from '../../interfaces/Auth';

class AuthService {
  private SECRET = process.env.JWT_SECRET as string;

  async sendOtp(email: string): Promise<LoginResponse> {
    try {
      const customer = await CustomerService.getCustomerByEmail(email);
      const { code } = await OtpService.createOtp(customer.id);
      await sendOtpEmail(email, code);
      const response = {
        message: 'The code has been sent to your email',
        customer: { id: customer.id, email: customer.email },
      };
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async login(email: string, code: string): Promise<OtpValidationResponse> {
    try {
      const customer = await CustomerService.getCustomerByEmail(email);
      const { id } = await OtpService.getOtpByCustomer(customer.id, code);
      if (id) {
        await OtpService.deleteOtp(id);
        const payload = {
          id: customer.id,
          email: customer.email,
        };
        const token = this.signToken(payload);
        return { token };
      }
    } catch (error: any) {
      throw error;
    }
  }

  verifyToken(token: string): PayloadType {
    const decoded = jwt.verify(token, this.SECRET) as PayloadType;
    return decoded;
  }

  signToken(payload: PayloadType): string {
    const token = jwt.sign(payload, this.SECRET, {
      expiresIn: '1d',
    });
    return token;
  }
}

export default new AuthService();
