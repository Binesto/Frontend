<template>
  <Search />
  <div class="application">
    <Nav />
    <div class="wrap">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>


//TODO: skeleton css i yaz ve debug da tanımla
//TODO: sidebar responsive için css düzenlemeleri yap



import Nav from '@/components/nav/nav.vue'
import Search from '@/components/search.vue'
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.application {
  @apply w-full h-screen flex p-8 max-w-[120rem] mx-auto max-h-[80rem] m-auto;
  .wrap {
    @apply w-full rounded-xl bg-dark-200 overflow-hidden border-2 border-bn-gray-800/20;
    div{
      @apply w-full h-full overflow-auto;
    }
  }
}
</style>