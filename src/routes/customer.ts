import { Router } from 'express';
import CustomerController from '../controllers/customer.controller';
import isAuthenticated from '../middlewares/isAuthenticated';
import validateRequestBody from '../middlewares/validateRequestBody';
import { customerSchema } from '../utils/validation/customerSchema';

const { getCustomers, getCustomerById, createCustomer } = CustomerController;

const router = Router();

router.get('/', isAuthenticated, getCustomers);
router.get('/:id', isAuthenticated, getCustomerById);
router.post('/', validateRequestBody(customerSchema), createCustomer);

export default router;
