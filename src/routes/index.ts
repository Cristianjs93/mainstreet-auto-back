import { Application } from 'express';
import healthcheckRouter from './healthcheck';
import customerRouter from './customer';
import authRouter from '../auth/routes/auth';

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/customers', customerRouter);
};

export default routes;
