<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { films } from '@/store'

export default Vue.extend({
  layout: 'isandler',
  async asyncData() {
    await films.index()
  }
})
</script>
