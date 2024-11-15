import axiosInstance from '../utils/axiosInstance';
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

  public async getCustomers(): Promise<any> {
    try {
      await this.getToken();
      const response = await axiosInstance.post('/customer/search', {
        limit: 100,
      });
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting customers');
    }
  }

  public async getCustomerById(id: string): Promise<any> {
    try {
      await this.getToken();
      const response = await axiosInstance.get(`/customer/${id}`);
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the customer');
    }
  }

  public async getLocations(): Promise<any> {
    try {
      await this.getToken();
      const response = await axiosInstance.get('/location');
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting locations');
    }
  }

  public async getLocationById(id: string): Promise<any> {
    try {
      await this.getToken();
      const response = await axiosInstance.get(`/location/${id}`);
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the location');
    }
  }

  public async getAppointments(): Promise<any> {
    try {
      await this.getToken();
      const response = await axiosInstance.get('/appointment');
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting appointments');
    }
  }

  public async getAppointmentById(id: string): Promise<any> {
    try {
      await this.getToken();
      const response = await axiosInstance.get(`/appointment/${id}`);
      return response.data;
    } catch (error: any) {
      handleErrorResponse(error, 'Error getting the appointment');
    }
  }
}

export default new ShopMonkeyService();
