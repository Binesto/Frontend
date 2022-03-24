<template>
  <div class="app">
    <Nav></Nav>
    <div class="wrap"></div>
  </div>
</template>

<script setup>
import Nav from './components/nav/nav.vue'
</script>

<style lang="scss" scoped>
.app {
  @apply w-full h-screen flex bg-dark-100 p-8;
  .wrap {
    @apply w-full rounded-3xl bg-dark-200;
  }
}
</style>