import axiosInstance from '../utils/axiosInstance';
import { CustomerResDto, CustomerSMDto } from '../interfaces/Customer';
import { AppointmentReqDto, AppointmentResDto } from 'interfaces/Appointment';
import { Location } from 'interfaces/Location';
import handleErrorResponse from '../utils/handleErrorResponse';

class ShopMonkeyService {
  private token: string = process.env.SHOPMONKEY_API_KEY;
  constructor() {
    if (!this.token) {
      throw new Error(
        'Shop Monkey Api Key is not defined in the environment variables'
      );
    }
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${this.token}`;
  }

  public async getCustomers(): Promise<CustomerResDto[]> {
    try {
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
      const { data: response } = await axiosInstance.get('/location');
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting locations');
    }
  }

  public async getLocationById(id: string): Promise<Location> {
    try {
      const { data: response } = await axiosInstance.get(`/location/${id}`);
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the location');
    }
  }

  public async getAppointments(): Promise<any> {
    try {
      const { data: response } = await axiosInstance.get('/appointment');
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting appointments');
    }
  }

  public async getAppointmentById(id: string): Promise<any> {
    try {
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
      const { data: response } = await axiosInstance.post(
        '/appointment',
        newAppointment
      );
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error creating the appointment');
    }
  }
}

export default new ShopMonkeyService();
