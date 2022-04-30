<template>
  <div class="main">
    <div class="main__title">İşlemler</div>
    <!-- Tabs -->
    <div class="main__tab" :class="activeTab == 0 ? 'buy' : 'sell'">
      <button @click="tab(0)">Alış</button>
      <button @click="tab(1)">Satış</button>
      <span></span>
    </div>
    <div class="main__type">
        <button>Limit</button>
        <button>Piyasa</button>
        <button>Koşul</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const activeType = ref(0);
const tab = (a) => {activeTab.value = a; activeType = 0;};
</script>

<style lang="scss" scoped>
.main {
  @apply w-1/4 flex-shrink-0 h-full p-8 space-y-2 bg-dark-100 rounded-3xl;
  &__title {
    @apply text-sm font-bold text-bn-gray-500 pb-2;
  }
  &__tab {
    @apply w-full flex gap-2 bg-bn-gray-900/50 p-2 rounded-xl relative;
    button {
      @apply transition-all duration-200 ease-in-out w-1/2 text-bn-gray-600 py-2 text-xs font-bold rounded-lg z-10;
    }
    span {
      @apply transition-all duration-200 ease-in-out h-3/4 top-1/2 transform -translate-y-1/2 absolute  rounded-xl pointer-events-none;
      width: calc(50% - 8px);
    }
  }
  &__tab.buy {
    button:nth-child(1) {
      @apply text-bn-green/70;
    }
    span {
      @apply bg-bn-green/5 left-2 translate-x-0;
    }
  }
  &__tab.sell {
    button:nth-child(2) {
      @apply text-bn-red/70;
    }
    span {
      @apply bg-bn-red/5 translate-x-full;
    }
  }
  &__type {
    @apply w-full flex gap-2 relative;
    button {
      @apply transition-all bg-bn-gray-900/30 rounded-md duration-200 ease-in-out w-1/2 text-bn-gray-600 py-2 text-xs font-bold;
    }
  }
}
</style>
