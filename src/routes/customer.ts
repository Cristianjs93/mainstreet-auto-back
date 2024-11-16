import { Router } from 'express';
import CustomerController from '../controllers/customer.controller';
import isAuthenticated from '../middlewares/isAuthenticated';
import validateCustomerBody from '../middlewares/validateCustomerBody';
import { customerSchema } from '../utils/validation/customerSchema';

const { getCustomers, getCustomerById, createCustomer } = CustomerController;

const router = Router();

router.get('/', isAuthenticated, getCustomers);
router.get('/:id', isAuthenticated, getCustomerById);
router.post('/', validateCustomerBody(customerSchema), createCustomer);

export default router;
