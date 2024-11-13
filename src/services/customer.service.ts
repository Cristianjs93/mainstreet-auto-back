import { Customer } from '@prisma/client';
import prisma from '../utils/prisma';
import handleErrorResponse from '../utils/handleErrorResponse';

class CustomerService {
  async getCustomers(): Promise<Customer[]> {
    try {
      const customers = await prisma.customer.findMany({});
      return customers;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting customers');
    }
  }

  async getCustomerById(id: string): Promise<Customer> {
    try {
      const customer = await prisma.customer.findUniqueOrThrow({
        where: { id },
      });
      return customer;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the customer');
    }
  }

  async getCustomerByEmail(email: string): Promise<Customer> {
    try {
      const customer = await prisma.customer.findUniqueOrThrow({
        where: { email },
      });
      if (!customer) {
        throw new Error('Customer not found');
      }
      return customer;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the customer');
    }
  }

  async createCustomer(body: any): Promise<any> {}
}

export default new CustomerService();
