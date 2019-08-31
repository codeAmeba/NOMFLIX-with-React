import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b8e07a1bc39775b44d7ad690b461e764',
    language: 'en-US'
  }
});

export default api;