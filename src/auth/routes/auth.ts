import { Router } from 'express';

import AuthController from '../controllers/auth.controller';

const { login, otpValidation } = AuthController;

const route = Router();

route.post('/login', login);
route.post('/otp-validation', otpValidation);

export default route;
