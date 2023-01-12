<template>
  <div class="film-list">
    <FilmCard v-for="film in $films" :key="film.id" :film="film" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { films } from '@/store'

export default Vue.extend({
  computed: {
    $films() {
      return films.$all
    }
  }
})
</script>

<style lang="scss" scoped>
.film-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  @include screen('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include screen('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
