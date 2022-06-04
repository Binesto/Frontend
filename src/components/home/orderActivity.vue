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
          <div
            class="order__tab__nav__indicator__ind"
            :class="
              currentData.id == 1
                ? 'mx-2 left-0 translate-x-0'
                : currentData.id == 2
                ? '-mx-2 left-1/2 -translate-x-1/2'
                : '-mx-6 left-full -translate-x-full'
            "
          ></div>
        </div>
      </nav>
    </div>
    <div class="order__content">
      <TransitionRoot
        :show="isEmpty"
        appear
        as="div"
        class="order__content__empty"
        enter="transform transition duration-[400ms]"
        enter-from="opacity-0 scale-95 w-0 h-0"
        enter-to="opacity-100 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leave-from="opacity-100 scale-100 "
        leave-to="opacity-0 scale-95"
      >
        <div class="order__content__empty__alert">
          <img src="@/assets/emptyAction.svg" draggable="false" />
          <h3 class="order__content__empty__alert__title">Bulunamadı...</h3>
          <p class="order__content__empty__alert__description">
            Burda henüz herhangi bir işlem geçmişiniz bulunmamakta.
          </p>
        </div>
      </TransitionRoot>
      <TransitionRoot
        :show="!isEmpty"
        appear
        as="div"
        class="order__content__empty z-10"
        enter="transition duration-[400ms]"
        enter-from="opacity-0 w-0 h-0"
        enter-to="opacity-100"
        leave="duration-200 transition ease-in-out"
        leave-from="opacity-100 "
        leave-to="opacity-0"
      >
        <table class="table">
          <thead class="table__head">
            <tr class="table__head__wrap">
              <th scope="col">İşlem</th>
              <th scope="col">Gerçekleşme Zamanı</th>
              <th scope="col">Miktar(BTC)</th>
              <th scope="col">Fiyat(TL)</th>
              <th scope="col">Toplam(TL)</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__body__wrap">
              <td class="table__body__wrap__content">
                <span class="table__body__wrap__content__status" status="rise">
                  Alış
                </span>
              </td>
              <td class="table__body__wrap__content">00:42:42</td>
              <td class="table__body__wrap__content">
                11,795.70
                <span class="table__body__wrap__content__unit">₺</span>
              </td>
              <td class="table__body__wrap__content">
                11,795.70
                <span class="table__body__wrap__content__unit">BTC</span>
              </td>
              <td class="table__body__wrap__content">
                11,795.70
                <span class="table__body__wrap__content__unit">₺</span>
              </td>
            </tr>
            <tr class="table__body__wrap">
              <td class="table__body__wrap__content">
                <span class="table__body__wrap__content__status" status="drop">
                  Satış
                </span>
              </td>
              <td class="table__body__wrap__content">00:42:42</td>
              <td class="table__body__wrap__content">
                11,795.70
                <span class="table__body__wrap__content__unit">₺</span>
              </td>
              <td class="table__body__wrap__content">
                11,795.70
                <span class="table__body__wrap__content__unit">BTC</span>
              </td>
              <td class="table__body__wrap__content">
                11,795.70
                <span class="table__body__wrap__content__unit">₺</span>
              </td>
            </tr>
          </tbody>
        </table>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";

const tabs = ref([
  {
    id: 1,
    name: "Açık Emirlerim",
    current: true,
    data: [1],
  },
  {
    id: 2,
    name: "Emir Geçmişim",
    current: false,
    data: [],
  },
  {
    id: 3,
    name: "Piyasa Geçmişim",
    current: false,
    data: [],
  },
]);

const isEmpty = ref(false);
const currentData = ref([]);

const setCurrent = (index, id) => {
  tabs.value.forEach((tab, i) => {
    if (i === index) {
      currentData.value = tab;
      currentData.value.id = id;
      tab.current = true;
      if (tab.data.length > 0) isEmpty.value = false;
      else isEmpty.value = true;
    } else tab.current = false;
  });
};
setCurrent(0, 1);
</script>

<style lang="scss" scoped>
.order {
  @apply w-full h-auto bg-dark-100 border-2 border-bn-gray-800/20 rounded-xl sm:rounded-3xl overflow-hidden;
  &__tab {
    @apply border-y border-bn-gray-800/20 px-2;
    &__nav {
      @apply -mb-px flex px-4 py-2.5 space-x-2 max-w-max relative;
      &__item {
        @apply w-44 text-center select-none rounded-xl transition-all duration-200 border-b-0 border-transparent hover:bg-bn-gray-700/5 px-8 py-3 cursor-pointer text-white/50 whitespace-nowrap font-medium text-xs;
      }
      &__item.active {
        @apply transition-all duration-200 text-bn-gray-200 shadow-lg hover:bg-transparent;
      }
      &__indicator {
        @apply absolute top-1/2 left-1/2 -translate-x-1/2 transform  -translate-y-1/2 w-full h-full rounded-xl pointer-events-none;
        &__ind {
          @apply transition-all duration-200 bg-bn-gray-500/5 rounded-xl absolute top-1/2 transform -translate-y-1/2 h-4/6 w-44;
        }
      }
    }
  }
  &__content {
    @apply w-full h-72 flex relative;
    &__empty {
      @apply w-full h-full flex justify-center select-none absolute inset-0;
      &__alert {
        @apply text-center mt-12 w-full flex items-center flex-col;
        img {
          @apply -mt-6 select-none;
        }
        &__title {
          @apply mt-2.5 text-sm font-medium text-white;
        }
        &__description {
          @apply mt-1 text-bn-gray-600 text-xs font-medium;
        }
      }
    }
    .table {
      @apply w-full flex flex-col;
      &__head {
        @apply pb-1 w-full flex flex-col sticky top-0 z-20;
        &__wrap {
          @apply flex bg-[#141414] overflow-hidden;
          th {
            @apply flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8;
          }
        }
      }
      &__body {
        @apply space-y-1 h-full;
        &__wrap {
          @apply flex relative cursor-pointer hover:bg-bn-gray-900/50;
          &__content {
            @apply z-10 flex items-center w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8;
            &__unit {
              @apply text-bn-gray-600 ml-1;
            }
            &__status {
              @apply inline-flex items-center px-4 py-1 rounded-md text-xs font-medium w-16 justify-center;
              &[status="drop"] {
                @apply bg-bn-red/5 text-bn-red;
              }
              &[status="rise"] {
                @apply bg-bn-green/5 text-bn-green;
              }
            }
          }
        }
      }
    }
  }
}
</style>
