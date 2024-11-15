import { Application } from 'express';
import healthcheckRouter from './healthcheck';
import authRouter from '../auth/routes/auth';
import customerRouter from './customer';
import shopMonkeyRouter from './shopMonkey';

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/customers', customerRouter);
  app.use('/api/shopmonkey', shopMonkeyRouter);
};

export default routes;
