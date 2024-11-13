import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const { sendOtp, login } = AuthController;

const route = Router();

route.post('/otp', sendOtp);
route.post('/login', login);

export default route;
