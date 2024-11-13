import crypto from 'crypto';
import { OTP } from '@prisma/client';
import prisma from '../utils/prisma';
import handleErrorResponse from '../utils/handleErrorResponse';

class OtpService {
  async getOtpByCustomer(customerId: string, code: string): Promise<OTP> {
    try {
      const otp = await prisma.oTP.findFirstOrThrow({
        where: { customerId, code },
      });
      return otp;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the code');
    }
  }

  async createOtp(customerId: string): Promise<OTP> {
    try {
      const code = crypto.randomInt(1000, 9999).toString();
      const expirationTime = new Date(Date.now() + 5 * 60 * 1000);

      return await prisma.oTP.create({
        data: { customerId, code, expirationTime },
      });
    } catch (error: any) {
      handleErrorResponse(error, 'Error creating the code');
    }
  }

  async deleteOtp(id: string): Promise<void> {
    try {
      await prisma.oTP.delete({
        where: { id },
      });
    } catch (error: any) {
      handleErrorResponse(error, 'Error deleting the code');
    }
  }
}

export default new OtpService();
