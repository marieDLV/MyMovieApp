import axios from 'axios';

const tmdbService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '470d2206c3a75338c9ef743e13b3b2c5'
  }
});

export default tmdbService;