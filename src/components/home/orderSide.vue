<template>
  <div class="order">
    <div class="order__nav" :class="active">
      <button @click="active = 'buy'">Alış Emri</button>
      <button @click="active = 'sell'">Satış Emri</button>
      <span class="order__nav__indicator">
        <span></span>
      </span>
    </div>
    <div class="order__wrap">
      <orderSide title="Alış Emri" type="buy" :active="'buy' == active" />
      <orderSide title="Satış Emri" type="sell" :active="'sell' == active" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import orderSide from "./order/side.vue";

const windowWidth = ref(null);

const active = ref("buy");

onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value < 640) {
    }
  });
});
</script>

<style lang="scss" scoped>
.order {
  @apply w-full h-auto bg-dark-100 border-2 border-bn-gray-800/20 rounded-xl sm:rounded-3xl overflow-hidden;
  &__nav {
    @apply xl:hidden relative flex justify-center w-full;
    &.buy {
      .order__nav__indicator {
        @apply translate-x-0;
      }
      button:nth-child(1) {
        @apply text-white;
      }
    }
    &.sell {
      .order__nav__indicator {
        @apply translate-x-full;
      }
      button:nth-child(2) {
        @apply text-white;
      }
    }
    &__indicator {
      @apply transition-all duration-200 left-0 rounded-xl absolute inset-y-0 my-0 w-1/2 pointer-events-none;
      span {
        @apply relative h-full w-full inset-0 inline-block after:absolute after:content-[''] after:inset-2.5 after:rounded-xl after:bg-bn-gray-500/5;
      }
    }
    button {
      @apply w-1/2 text-xs rounded-xl py-6 font-semibold z-10 text-bn-gray-500;
    }
  }
  &__wrap {
    @apply w-full h-full flex xl:divide-x xl:divide-bn-gray-900;
  }
}
</style>
