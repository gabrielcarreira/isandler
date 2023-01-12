<template>
  <div class="film-cover">
    <img
      :src="`https://image.tmdb.org/t/p/w500${$film.poster_path}`"
      :alt="`Capa do Filme ${$film.title}`"
    />
    <NuxtLink class="watch-film" to="#">Ver Filme</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { films } from '@/store'

export default Vue.extend({
  computed: {
    $film() {
      return films.$single
    }
  }
})
</script>

<style lang="scss" scoped>
.film-cover {
  img {
    width: 100%;
  }
  .watch-film {
    background: #292929;
    color: #f7f7f7;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 42px;
    font-size: 1.1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease;
    &:hover {
      opacity: 0.89;
    }
  }
}
</style>
