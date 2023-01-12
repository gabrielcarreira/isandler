<template>
  <div class="film-info">
    <h2 class="film-title">{{ $film.title }}</h2>

    <div class="film-description" v-html="$film.overview"></div>

    <div class="film-release-details">
      <ul>
        <li>
          <p>Lançamento</p>
          <p v-text="$film.release_date.slice(0, 4)"></p>
        </li>
        <li>
          <p>Popularidade</p>
          <p v-text="$film.popularity.toString().slice(0, 2)"></p>
        </li>
      </ul>
    </div>
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
.film-info {
  .film-title {
    margin-bottom: 2rem;
  }
  .film-description {
    line-height: 1.625rem;
  }
  .film-release-details {
    margin-top: 1rem;
    ul {
      display: grid;
      grid-gap: 0.65rem;
      li {
        display: grid;
        grid-template-columns: 160px 1fr;
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
}
</style>
