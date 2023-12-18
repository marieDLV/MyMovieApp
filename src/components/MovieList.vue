<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
});
</script>