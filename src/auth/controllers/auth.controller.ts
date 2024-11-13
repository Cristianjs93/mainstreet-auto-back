import { Request, Response } from 'express';
import AuthService from '../services/auth.services';

class AuthController {
  async sendOtp(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      const response = await AuthService.sendOtp(email);
      res.status(200).json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { user, code } = req.body;
      const response = await AuthService.login(user.email, code);
      res.status(200).json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }
}

export default new AuthController();
