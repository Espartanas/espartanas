import axios from 'axios';
import {getToken} from '../auth';

const api = axios.create({
  baseURL: 'http://10.0.0.213:3000',
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
