import tmdbService from '@/services/tmbService';
import { defineStore } from 'pinia';

export const useMovieStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: []
  }),
  actions: {
    async fetchMovies() {
      const response = await tmdbService.get('/movie/popular');
      this.movies = response.data.results;
    }
  }
});