<template>
  <div class="order">
    <div class="order__nav">
      <button @click="active = 'buy'">Alış Emri</button>
      <button @click="active = 'sell'">Satış Emri</button>
      <span class="order__nav__indicator"></span>
    </div>
    <div class="order__wrap">
      <orderSide title="Alış Emri" type="buy" :active="'buy' == active"/>
      <orderSide title="Satış Emri" type="sell" :active="'sell' == active"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import orderSide from './order/side.vue';

const windowWidth = ref(null);

const active = ref('buy');

onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value < 640) {
      
    };
  });
});

</script>

<style lang="scss" scoped>
.order {
  @apply w-full h-auto bg-dark-100 border-2 border-bn-gray-800/20 rounded-3xl overflow-hidden;
  &__nav{
    @apply sm:hidden space-x-2 relative flex justify-center w-full p-4;
    &__indicator{
      @apply bg-bn-gray-500/20 left-0 rounded-xl absolute inset-y-0 my-2.5 w-1/2 pointer-events-none;
    }
    button{
      @apply w-1/2 text-xs rounded-xl py-2.5 font-medium z-10
    }
  }
  &__wrap {
    @apply w-full h-full flex sm:divide-x sm:divide-bn-gray-900;
  }
}
</style>
