import axiosInstance from '../utils/axiosInstance';

class ShopMonkeyService {
  private token: string | null = null;
  private tokenExpiration: number | null = null;

  private async requestToken(): Promise<string> {
    try {
      const response = await axiosInstance.post('/auth/login', {
        email: process.env.SHOPMONKEY_EMAIL,
        password: process.env.SHOPMONKEY_PASSWORD,
        audience: 'api',
      });
      this.token = response.data.token;
      this.tokenExpiration = Date.now() + response.data.expires_in * 1000;
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${this.token}`;
      return this.token;
    } catch (error) {
      console.log('SM SERVICE ERROR', JSON.stringify(error, null, 2));
      throw error;
    }
  }

  public async getToken(): Promise<string> {
    try {
      if (
        this.token &&
        this.tokenExpiration &&
        Date.now() < this.tokenExpiration
      ) {
        return this.token;
      }
      return this.requestToken();
    } catch (error) {
      throw error;
    }
  }
}

export default new ShopMonkeyService();
