import ShopMonkeyService from './shopMonkey.service';
import prisma from '../utils/prisma';
import { Customer } from '@prisma/client';
import { CustomerReqDto, CustomerResDto } from '../interfaces/Customer';
import handleErrorResponse from '../utils/handleErrorResponse';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

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

  async createCustomer(newCustomer: CustomerReqDto): Promise<CustomerResDto> {
    try {
      const { email, ...customer } = newCustomer;
      await this.validateExistingCustomer(email);
      const customerSM = await ShopMonkeyService.createCustomer(customer);
      await prisma.customer.create({
        data: { ...newCustomer, shopMonkeyId: customerSM.id },
      });
      return customerSM;
    } catch (error: any) {
      handleErrorResponse(error, 'Error creating the customer');
    }
  }

  async validateExistingCustomer(email: string): Promise<void> {
    try {
      const customer = await prisma.customer.findUnique({
        where: { email },
      });
      if (customer) {
        throw new PrismaClientKnownRequestError(
          'Customer with the requested email already exists',
          { code: 'P2002', clientVersion: '5.22.0' }
        );
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new CustomerService();
