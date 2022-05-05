<template>
  <div class="order">
    <div class="order__tab">
      <nav class="order__tab__nav" aria-label="Tabs">
        <a
          @click="setCurrent(index, tab.id)"
          v-for="(tab, index) in tabs"
          :key="index"
          class="order__tab__nav__item"
          :class="{ active: tab.current }"
          :aria-current="tab.current ? 'page' : undefined"
        >
          {{ tab.name }}
        </a>
        <div class="order__tab__nav__indicator">
          <div class="order__tab__nav__indicator__ind" :class="currentData.id == 1 ? 'mx-2 left-0 translate-x-0' : currentData.id == 2 ? '-mx-2 left-1/2 -translate-x-1/2' : '-mx-6 left-full -translate-x-full'"></div>
        </div>
      </nav>
    </div>
    <div class="order__content">
      <div v-if="isEmpty" class="order__content__empty">
        <div class="order__content__empty__alert">
          <img
            src="@/assets/emptyAction.svg"
            draggable="false"
          />
          <h3 class="order__content__empty__alert__title">Bulunamadı...</h3>
          <p class="order__content__empty__alert__description">
            {{ currentData.emptyMessage }}
          </p>
        </div>
      </div>
      <div v-else>
        <span v-for="(data, index) in currentData.data" :key="index">{{
          data
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    id: 1,
    name: "Açık Emirlerim",
    current: true,
    data: [],
    emptyMessage: "Henüz herhangi bir Açık Emriniz bulunmamakta.",
  },
  {
    id: 2,
    name: "Emir Geçmişim",
    current: false,
    data: [],
    emptyMessage: "Henüz herhangi bir Emir Geçmişiniz bulunmamakta.",
  },
  {
    id: 3,
    name: "Piyasa Geçmişim",
    current: false,
    data: [],
    emptyMessage: "Henüz herhangi bir Piyasa Geçmişiniz bulunmamakta.",
  },
]);

const isEmpty = ref(false);
const currentData = ref([]);

const setCurrent = (index,id) => {
  tabs.value.forEach((tab, i) => {
    if (i === index) {
      currentData.value = tab;
      currentData.value.id = id;
      tab.current = true;
      if (tab.data.length > 0) isEmpty.value = false;
      else isEmpty.value = true;
    } else {
      tab.current = false;
    }
  });
};
setCurrent(0,1);

</script>

<style lang="scss" scoped>
.order {
  @apply w-full h-auto bg-dark-100 border-2 border-bn-gray-800/20 rounded-3xl overflow-hidden;
  &__tab {
    @apply border-y border-bn-gray-800/20;
    &__nav {
      @apply -mb-px flex px-4 py-2.5 space-x-2 max-w-max relative;
      &__item {
        @apply w-44 text-center select-none rounded-xl transition-all duration-200 border-b-0 border-transparent hover:bg-bn-gray-800/5 px-8 py-3 cursor-pointer text-white/50 whitespace-nowrap font-medium text-xs;
      }
      &__item.active {
        @apply transition-all duration-200 text-primary/80 shadow-lg;
      }
      &__indicator {
        @apply absolute top-1/2 left-1/2 -translate-x-1/2 transform  -translate-y-1/2 w-full h-full rounded-xl pointer-events-none;
        &__ind {
          @apply transition-all duration-200 bg-primary/5 rounded-xl absolute top-1/2 transform -translate-y-1/2 h-4/6 w-44 ;
        }
      }
    }
  }
  &__content{
    @apply w-full h-72 flex;
    &__empty{
      @apply w-full h-full flex justify-center select-none;
      &__alert{
        @apply text-center mt-12 w-full flex items-center flex-col;
        img{
          @apply -mt-6 select-none;
        }
        &__title{
          @apply mt-2.5 text-sm font-medium text-white;
        }
        &__description{
          @apply mt-1 text-bn-gray-700 text-xs font-medium;
        }
      }
    }
  }
}
</style>
