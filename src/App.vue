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


// TODO

//TODO: drop rise statment larını attribute haline getir
//TODO: skeleton css i yaz ve debug da tanımla
//TODO: whell scroll kütüpahanesini ekle ve kullan
//TODO: sidebar responsive için css düzenlemeleri yap



import Nav from '@/components/nav/nav.vue'
import Search from '@/components/search.vue'
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.application {
  @apply w-full h-screen flex p-8 max-w-[120rem] mx-auto max-h-[80rem] m-auto;
  .wrap {
    @apply w-full rounded-3xl bg-dark-200 overflow-hidden;
  }
}
</style>