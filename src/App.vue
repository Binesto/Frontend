<template>
  <Search />
  <div class="application">
    <Nav />
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Nav from '@/components/nav/nav.vue'
import Search from '@/components/search.vue'
</script>

<style lang="scss" scoped>
.application {
  @apply w-full h-screen flex bg-dark-100 p-8;
  .wrap {
    @apply w-full rounded-3xl bg-dark-200 p-8;
  }
}
</style>