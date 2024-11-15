import axios from 'axios';
import { config } from 'dotenv';

config();
const axiosInstance = axios.create({
  baseURL:
    process.env.ENV === 'dev'
      ? process.env.SANDBOX_PATH
      : process.env.SHOPMONKEY_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
