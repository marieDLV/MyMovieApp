<script setup lang="ts">
import MovieList from '../components/MovieList.vue'
import SearchBar from '@/components/SearchBar.vue'
import { computed } from 'vue';
import { useMovieStore } from '../stores/movie';

const movieStore = useMovieStore();
const searchResults = computed(() => {
  if(movieStore.searchResults)
    return movieStore.searchResults;
  else
    return movieStore.movies;
})
</script>

<template>
  <main>
    <SearchBar />
    <MovieList :movies="searchResults" />
  </main>
</template>
