import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://mangaverse-api.p.rapidapi.com/manga/',
  // timeout: 1000,
  headers: {
    'x-rapidapi-key': 'ea49983144msh16122c706114817p1d3108jsn0f5606fc9e99',
    'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com',
  },
});

// Add interceptors here
apiClient.interceptors.request.use(
  (config) => {
    console.log('Request:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default apiClient; // Export the client
