<template>
  <div class="order">
    <div class="order__tab">
      <nav class="order__tab__nav" aria-label="Tabs">
        <a
          @click="setCurrent(tab.id)"
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
      <div class="order__tab__selectwrap">
        <select
          id="tabs"
          name="tabs"
          class="order__tab__selectwrap__select"
          v-model="selectTab"
        >
          <option v-for="tab in tabs" :key="tab.id" :value="tab.id">
            {{ tab.name }}
          </option>
        </select>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <!-- Heroicon name: solid/selector -->
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
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
          </tbody>
        </table>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
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

const selectTab = ref(1);

const isEmpty = ref(false);
const currentData = ref([]);

const setCurrent = (id) => {
  var selectedTab = tabs.value.find((tab) => tab.id == id);
  if (selectedTab) {
    currentData.value = selectedTab;
    currentData.value.id = id;
    selectedTab.current = true;
    if (selectedTab.data.length > 0) isEmpty.value = false;
    else isEmpty.value = true;
  } else {
    selectedTab.current = false;
  }
};
setCurrent(1);

watch(
  () => selectTab.value,
  () => {
    setCurrent(selectTab.value);
  }
);
</script>

<style lang="scss" scoped>
.secont-data {
  @apply hidden;
}
.order {
  @apply w-full h-auto bg-dark-100 border-2 border-bn-gray-800/20 rounded-xl sm:rounded-3xl overflow-hidden;
  &__tab {
    @apply border-y border-bn-gray-800/20 px-2;
    &__nav {
      @apply hidden xl:flex -mb-px px-4 py-2.5 space-x-2 max-w-max relative;
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
    &__selectwrap {
      @apply xl:hidden h-full w-full relative;
      &__select {
        @apply bg-transparent border-bn-gray-900 mt-1 block w-full pl-3 pr-10 py-4 text-xs focus:outline-none text-bn-gray-300 focus:text-white sm:text-sm rounded-md;
        -webkit-appearance: none;
        option {
          @apply bg-bn-gray-900 py-2 border-none border-0;
        }
      }
    }
  }
  &__content {
    @apply w-full h-72 flex relative;
    &__empty {
      @apply w-full h-full flex justify-center select-none absolute inset-0;
      &__alert {
        @apply text-center mt-12 w-full flex items-center flex-col px-2;
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
            @apply flex w-full truncate py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8;
          }
          th:nth-child(2) {
            @apply hidden xl:block;
          }
          th:last-child {
            @apply hidden xl:block;
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
          &__content:nth-child(2) {
            @apply hidden xl:block;
          }
          &__content:last-child {
            @apply hidden xl:block;
          }
        }
      }
    }
  }
}
</style>
