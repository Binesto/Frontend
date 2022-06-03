<template>
  <div class="main">
    <div class="main__title">İşlemler</div>
    <!-- Tabs -->
    <div class="main__tab" :class="activeTab == 0 ? 'buy' : 'sell'">
      <button @click="tab(0)">Alış</button>
      <button @click="tab(1)">Satış</button>
      <span></span>
    </div>
    <!--Type-->
    <div class="main__type">
      <button
        @click="type(0)"
        :class="
          activeType == 0
            ? 'bg-bn-gray-700/30 text-bn-gray-300'
            : 'bg-bn-gray-900/30 text-bn-gray-600'
        "
      >
        Limit
      </button>
      <button
        @click="type(1)"
        :class="
          activeType == 1
            ? 'bg-bn-gray-700/30 text-bn-gray-300'
            : 'bg-bn-gray-900/30 text-bn-gray-600'
        "
      >
        Piyasa
      </button>
      <button
        @click="type(2)"
        :class="
          activeType == 2
            ? 'bg-bn-gray-700/30 text-bn-gray-300'
            : 'bg-bn-gray-900/30 text-bn-gray-600'
        "
      >
        Koşul
      </button>
    </div>
    <!--Balance-->
    <div class="main__balance">
      <div class="main__balance__title">Kullanılabilir Bakiye</div>
      <div class="main__balance__price" unit="₺">5.00</div>
    </div>
    <TransitionRoot
      :show="isShowing"
      enter="transition-all duration-200"
      enter-from="h-0 opacity-0"
      enter-to="h-8 opacity-100"
      leave="transition-all duration-200"
      leave-from="h-8 opacity-100"
      leave-to="h-0 opacity-0"
    >
      <inputP title="Koşul" placeholder="12.1125421" unit="₺" currency="true" />
    </TransitionRoot>
    <inputP
      title="Fiyat"
      placeholder="12.1125421"
      unit="₺"
      currency="true"
      :disabled="markets"
    />
    <inputP
      title="Miktar"
      placeholder="12.1125421"
      unit="eth"
      :disabled="markets"
    />
    <inputP title="Toplam" placeholder="12.1125421" unit="eth" />

    <button
      class="main__process"
      @click="process"
      :class="activeTab == 0 ? 'buy' : 'sell'"
    >
      {{ activeTab == 0 ? "Alış Emri Ver" : "Satış Emri Ver" }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import inputP from "./process/input.vue";
import { TransitionRoot } from "@headlessui/vue";


const activeTab = ref(0);
const activeType = ref(0);
const tab = (val) => (activeTab.value = val);
const type = (val) => (activeType.value = val);
const markets = ref(false);
const isShowing = ref(false);


const process = () => {
  if (activeTab.value == 0) {
    console.log("Alış Emri Ver");
    isType("buy");
  } else {
    console.log("Satış Emri Ver");
    isType("sell");
  }
};

const isType = (active) => {
  console.log(active);
  switch (activeType.value) {
    case 0:
      console.log("Limit");
      break;
    case 1:
      console.log("Piyasa");
      break;
    case 2:
      console.log("Koşul");
      break;
  }
};

watch(activeType, (val) => {
  markets.value = false;
  isShowing.value = false;
  if (val == 1) {
    markets.value = true;
  } else if (val == 2) {
    isShowing.value = true;
  }
});


</script>

<style lang="scss" scoped>
.main {
  @apply w-full xl:w-1/4 flex-shrink-0 h-full p-8 space-y-2 bg-dark-100 rounded-3xl border-2 border-bn-gray-800/20;
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
      @apply transition-all rounded-md duration-200 ease-in-out w-1/2 py-2 text-xs font-bold;
    }
  }
  &__balance {
    @apply flex w-full justify-center flex-col items-center py-2;
    &__title {
      @apply text-xs font-bold text-bn-gray-700;
    }
    &__price {
      @apply text-lg font-bold text-white after:content-[attr(unit)] after:font-bold after:text-bn-gray-500;
    }
  }
  &__process {
    @apply transition-all duration-200 w-full text-xs font-bold rounded-lg px-2 py-3;
    &:disabled {
      @apply opacity-50 cursor-not-allowed;
    }
  }
  &__process.buy {
    @apply bg-bn-green/20 text-bn-green;
    &:hover {
      @apply bg-bn-green/30;
    }
  }
  &__process.sell {
    @apply bg-bn-red/20 text-bn-red;
    &:hover {
      @apply bg-bn-red/30;
    }
  }
}
</style>
