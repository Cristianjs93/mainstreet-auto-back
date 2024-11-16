import { Router } from 'express';
import ShopMonkeyController from '../controllers/shopMonkey.controller';
import isAuthenticated from '../middlewares/isAuthenticated';

const {
  getCustomers,
  getCustomerById,
  getLocations,
  getLocationById,
  getAppointments,
  getAppointmentById,
} = ShopMonkeyController;

const router = Router();

router.get('/customers', isAuthenticated, getCustomers);
router.get('/customers/:id', isAuthenticated, getCustomerById);
router.get('/locations', isAuthenticated, getLocations);
router.get('/locations/:id', isAuthenticated, getLocationById);
router.get('/appointments', isAuthenticated, getAppointments);
router.get('/appointments/:id', isAuthenticated, getAppointmentById);

export default router;
