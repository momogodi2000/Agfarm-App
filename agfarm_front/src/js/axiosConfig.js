// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Update with your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // If you need to send cookies with your requests
});

// Intercept requests to handle preflight and redirects
// instance.interceptors.request.use((config) => {
//   // Handle specific configurations if needed
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// // Intercept responses to handle redirects
// instance.interceptors.response.use((response) => {
//   return response;
// }, (error) => {
//   if (error.response.status === 301) {
//     // Handle redirects if necessary
//   }
//   return Promise.reject(error);
// });

export default instance;
