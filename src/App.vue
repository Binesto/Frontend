<template>
  <Search />
  <div class="application">
    <Nav />
    <mobileTop />
    <div class="wrap">
      <div>
        <router-view></router-view>
      </div>
    </div>
    <mobileNav />
  </div>
</template>

<script setup>

//TODO: sidebar responsive için css düzenlemeleri yap



import Nav from '@/components/nav/nav.vue'
import mobileTop from '@/components/nav/mobileTop.vue'
import mobileNav from '@/components/nav/mobileNav.vue'
import Search from '@/components/search.vue'
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.application {
  @apply w-full h-screen flex flex-col sm:flex-row sm:py-8 sm:pr-8 max-w-[120rem] mx-auto max-h-[80rem] m-auto;
  .wrap {
    @apply h-full w-full sm:rounded-xl pb-12 sm:pb-0 bg-dark-200 overflow-hidden border-2 border-bn-gray-800/20;
    div{
      @apply w-full h-full overflow-auto;
    }
  }
}
</style>