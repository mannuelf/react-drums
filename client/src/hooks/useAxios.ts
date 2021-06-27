import { useContext } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '../constants';
import AuthContext from '../context/AuthContext';

const useAxios = () => {
  const [auth] = useContext(AuthContext);
  console.log('useAxios', auth);

  const httpClient = axios.create({
    baseURL: API_URL,
  });

  httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = 'auth?.jwt';
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
};

export default useAxios;
