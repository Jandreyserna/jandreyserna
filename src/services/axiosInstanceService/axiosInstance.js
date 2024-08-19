import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Reemplaza con la URL de tu backend
  timeout: 1000, // Opcional: establece un tiempo de espera
  /* headers: { 'Content-Type': 'application/json' } // Opcional: establece encabezados por defecto */
});

export default axiosInstance;