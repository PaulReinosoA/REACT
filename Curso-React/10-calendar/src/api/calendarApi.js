import axios from 'axios';
import { getEnvVariables } from '../calendar/helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

// TODO: configurar interceptores -> permite intercerptar la peticion antes o despues de que se haga y añadir o modificar inf. a la peticion
calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  };

  return config;
});

export default calendarApi;
