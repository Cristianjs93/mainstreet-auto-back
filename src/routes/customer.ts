import { Router } from 'express';
import CustomerController from '../controllers/customer.controller';
import isAuthenticated from '../auth/middlewares/isAuthenticated';

const { getCustomers, getCustomerById } = CustomerController;

const router = Router();

router.get('/', isAuthenticated, getCustomers);
router.get('/:id', isAuthenticated, getCustomerById);

export default router;
