<template>
  <FilmDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { films } from '@/store'

export default Vue.extend({
  layout: 'isandler',
  async asyncData({ params }) {
    await films.show({ id: params.id as any })
  },
  head() {
    return {
      title: films.$single.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: films.$single.overview
        }
      ]
    }
  }
})
</script>

<style scoped></style>
