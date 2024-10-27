// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your backend API URL
//   withCredentials: true,
});

// You can also add interceptors if needed, e.g., for handling tokens
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any custom logic before sending the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
