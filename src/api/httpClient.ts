import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com',
});

// po co to
httpClient.interceptors.response.use(function (response) {
  return response;
}, function () {
  throw new Error('Network response was not ok');
});