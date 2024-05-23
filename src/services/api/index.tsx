import axios from 'axios';
import {getToken} from '../auth';

const api = axios.create({
  baseURL: 'http://aespartana.cloud:3001',
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
