import { Request, Response } from 'express';
import AuthService from '../services/auth.services';

class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      const response = await AuthService.login(email);
      res.status(200).json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async otpValidation(req: Request, res: Response): Promise<void> {
    try {
      const { user, code } = req.body;
      const response = await AuthService.otpValidation(user.email, code);
      res.status(200).json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }
}

export default new AuthController();
