<template>
    <div>
      <input type="text" v-model="title" @input="searchMovies" placeholder="Search for a movie..." />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useMovieStore } from '../stores/movie';
  
  const movieStore = useMovieStore();
  const title = ref('');
  
  const searchMovies = () => {
    movieStore.searchMovies(title.value);
  };
  </script>