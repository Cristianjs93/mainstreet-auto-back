import { Request, Response } from 'express';
import CustomerService from '../services/customer.service';

class CustomerController {
  async getCustomers(_: Request, res: Response): Promise<void> {
    try {
      const response = await CustomerService.getCustomers();
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async getCustomerById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const response = await CustomerService.getCustomerById(id);
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async createCustomer(req: Request, res: Response): Promise<void> {
    try {
      const response = await CustomerService.createCustomer(req.body);
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }
}

export default new CustomerController();
