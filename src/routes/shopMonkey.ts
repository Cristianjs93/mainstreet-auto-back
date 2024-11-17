import { Router } from 'express';
import ShopMonkeyController from '../controllers/shopMonkey.controller';
import isAuthenticated from '../middlewares/isAuthenticated';
import validateRequestBody from '../middlewares/validateRequestBody';
import { appointmentSchema } from '../utils/validation/appointmentSchema';

const {
  getCustomers,
  getCustomerById,
  getLocations,
  getLocationById,
  getAppointments,
  getAppointmentById,
  createAppointment,
} = ShopMonkeyController;

const router = Router();

router.get('/customers', isAuthenticated, getCustomers);
router.get('/customers/:id', isAuthenticated, getCustomerById);
router.get('/locations', isAuthenticated, getLocations);
router.get('/locations/:id', isAuthenticated, getLocationById);
router.get('/appointments', isAuthenticated, getAppointments);
router.get('/appointments/:id', isAuthenticated, getAppointmentById);
router.post(
  '/appointments',
  isAuthenticated,
  validateRequestBody(appointmentSchema),
  createAppointment
);

export default router;
