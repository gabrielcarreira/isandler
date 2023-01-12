<template>
  <NuxtLink class="film-card" :to="`/film/${film.id}`">
    <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" :alt="`Capa do Filme ${film.title}`">
    <div class="text">
      <h4>{{ film.title }}</h4>
      <p v-text="film.release_date.slice(0, 4)"></p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import { Film } from '@/models'

  export default Vue.extend({
    props: {
      film: {
        type: Object,
        required: true
      } as PropOptions<Film>
    }
    
  })
</script>

<style lang="scss" scoped>
.film-card {
  color: inherit;
  display: grid;
  grid-gap: 1.5rem;
  img {
    display: grid;
    width: 100%;
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }
  h4 {
    font-size: 0.875rem;
    font-weight: 400;
  }
  p {
    font-size: 13px;
    color: color('dark');
  }
}
</style>