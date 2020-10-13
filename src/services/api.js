import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.mocky.io/v2/',
})

export default api;