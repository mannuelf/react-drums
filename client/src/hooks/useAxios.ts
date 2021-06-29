import { useContext } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_URL } from '../constants';
import AuthContext from '../context/AuthContext';

const useAxios = (): AxiosInstance => {
  const [auth] = useContext(AuthContext);
  console.log('useAxios', auth);

  const apiClient = axios.create({
    baseURL: API_URL,
  });

  apiClient.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
    },
  );
  return apiClient;
};

export default useAxios;
