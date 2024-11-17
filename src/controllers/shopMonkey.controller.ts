import { Request, Response } from 'express';
import ShopMonkeyService from '../services/shopMonkey.service';

class ShopMonkeyController {
  async getCustomers(_: Request, res: Response): Promise<void> {
    try {
      const response = await ShopMonkeyService.getCustomers();
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async getCustomerById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const response = await ShopMonkeyService.getCustomerById(id);
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async getLocations(_: Request, res: Response): Promise<void> {
    try {
      const response = await ShopMonkeyService.getLocations();
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async getLocationById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const response = await ShopMonkeyService.getLocationById(id);
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async getAppointments(_: Request, res: Response): Promise<void> {
    try {
      const response = await ShopMonkeyService.getAppointments();
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async getAppointmentById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const response = await ShopMonkeyService.getAppointmentById(id);
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }

  async createAppointment(req: Request, res: Response): Promise<void> {
    try {
      const response = await ShopMonkeyService.createAppointment(req.body);
      res.json(response);
    } catch (error: any) {
      const message = JSON.parse(error.message);
      res.status(message.status).json(message);
    }
  }
}

export default new ShopMonkeyController();
