import axiosInstance from '../utils/axiosInstance';
import { CustomerResDto, CustomerSMDto } from '../interfaces/Customer';
import { AppointmentReqDto, AppointmentResDto } from 'interfaces/Appointment';
import { Location } from 'interfaces/Location';
import handleErrorResponse from '../utils/handleErrorResponse';

class ShopMonkeyService {
  private token: string | null = null;

  private async requestToken(): Promise<string> {
    try {
      // Enable this code when an endpoint for authorization is created in the sandbox
      /*  const response = await axiosInstance.post('/auth/login', {
        email: process.env.SHOPMONKEY_EMAIL,
        password: process.env.SHOPMONKEY_PASSWORD,
        audience: 'api',
      });
      this.token = response.data.token;*/

      this.token = process.env.SANDBOX_TOKEN;
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${this.token}`;
      return this.token;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting token');
    }
  }

  public async getToken(): Promise<string> {
    try {
      if (this.token) {
        return this.token;
      }
      return this.requestToken();
    } catch (error) {
      throw error;
    }
  }

  public async getCustomers(): Promise<CustomerResDto[]> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.post('/customer/search', {
        limit: 100,
      });
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting customers');
    }
  }

  public async getCustomerById(id: string): Promise<CustomerResDto> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.get(`/customer/${id}`);
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the customer');
    }
  }

  public async createCustomer(
    newCustomer: CustomerSMDto
  ): Promise<CustomerResDto> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.post(
        '/customer',
        newCustomer
      );
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error creating the customer');
    }
  }

  public async getLocations(): Promise<Location[]> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.get('/location');
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting locations');
    }
  }

  public async getLocationById(id: string): Promise<Location> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.get(`/location/${id}`);
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the location');
    }
  }

  public async getAppointments(): Promise<any> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.get('/appointment');
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting appointments');
    }
  }

  public async getAppointmentById(id: string): Promise<any> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.get(`/appointment/${id}`);
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the appointment');
    }
  }

  public async createAppointment(
    newAppointment: AppointmentReqDto
  ): Promise<AppointmentResDto> {
    try {
      await this.getToken();
      const { data: response } = await axiosInstance.post(
        '/appointment',
        newAppointment
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      handleErrorResponse(error, 'Error creating the appointment');
    }
  }
}

export default new ShopMonkeyService();
