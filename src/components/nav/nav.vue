<template>
  <div v-if="windowWidth > 640" class="nav" :class="{ closed: navActs }">
    <div class="content">
      <Logo :navstatus="navActs" />
      <button
        @click="navAc"
        class="hidden 2xl:flex transition-all duration-200 z-40 absolute w-12 border-2 border-white/5 bg-bn-gray-900 hover:bg-bn-gray-800 text-bn-gray-400 hover:text-bn-gray-200 rounded-md py-2 items-center justify-center -right-2 top-10 translate-x-6 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="transition-all duration-200 h-4 w-4"
          :class="{ 'transform rotate-180': navActs }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div class="contain"></div>
      <perfect-scrollbar class="menu">
        <div class="topMenu">
          <div class="other">
            <MenuItem @click="search" active>
              <svg
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 16L12.375 12.375M14.3333 7.66666C14.3333 11.3486 11.3486 14.3333 7.66666 14.3333C3.98476 14.3333 1 11.3486 1 7.66666C1 3.98476 3.98476 1 7.66666 1C11.3486 1 14.3333 3.98476 14.3333 7.66666Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span :class="{ hidden: navActs }">Ara</span>
            </MenuItem>
            <MenuItem
              active="notification"
              :notification="notification"
              :navState="navActs"
            >
              <svg
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="active"
                  d="M13.5 6C13.5 4.67392 12.9732 3.40215 12.0355 2.46447C11.0979 1.52678 9.82608 1 8.5 1C7.17392 1 5.90215 1.52678 4.96447 2.46447C4.02678 3.40215 3.5 4.67392 3.5 6C3.5 11.8333 1 13.5 1 13.5H16C16 13.5 13.5 11.8333 13.5 6Z"
                  fill="currentColor"
                />
                <path
                  d="M9.94167 16.8333C9.79516 17.0859 9.58487 17.2955 9.33185 17.4413C9.07884 17.587 8.79198 17.6637 8.5 17.6637C8.20802 17.6637 7.92116 17.587 7.66814 17.4413C7.41513 17.2955 7.20484 17.0859 7.05833 16.8333M13.5 6C13.5 4.67392 12.9732 3.40215 12.0355 2.46447C11.0979 1.52678 9.82608 1 8.5 1C7.17392 1 5.90215 1.52678 4.96447 2.46447C4.02678 3.40215 3.5 4.67392 3.5 6C3.5 11.8333 1 13.5 1 13.5H16C16 13.5 13.5 11.8333 13.5 6Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span :class="{ hidden: navActs }">Bildirim</span>
            </MenuItem>
          </div>
          <div class="menuInfo" :class="{ '!px-2': navActs }">Genel</div>
          <div class="general">
            <MenuItem active="home">
              <svg
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="active"
                  d="M1 6.83333L8.5 1L16 6.83333V16C16 16.442 15.8244 16.866 15.5118 17.1785C15.1993 17.4911 14.7754 17.6667 14.3333 17.6667H2.66667C2.22464 17.6667 1.80072 17.4911 1.48816 17.1785C1.17559 16.866 1 16.442 1 16V6.83333Z"
                  fill="currentColor"
                />
                <path
                  d="M1 6.83333L8.5 1L16 6.83333V16C16 16.442 15.8244 16.8659 15.5118 17.1785C15.1993 17.4911 14.7754 17.6667 14.3333 17.6667H2.66667C2.22464 17.6667 1.80072 17.4911 1.48816 17.1785C1.17559 16.8659 1 16.442 1 16V6.83333Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span :class="{ hidden: navActs }">Anasayfa</span>
            </MenuItem>
            <MenuItem active="markets">
              <svg
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 16V6.625M16 16V1M1 16V12.25"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span :class="{ hidden: navActs }">Piyasalar</span>
            </MenuItem>
            <MenuItem active="wallet">
              <svg
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="active"
                  d="M16 10.5455V5.09091H1V10.5455C1 11.2986 1.61052 11.9091 2.36364 11.9091H14.6364C15.3895 11.9091 16 11.2986 16 10.5455Z"
                  fill="currentColor"
                />
                <path
                  d="M1.18213 5.09091H16.3643M2.56233 1H14.9841C15.7464 1 16.3643 1.61052 16.3643 2.36364V10.5455C16.3643 11.2986 15.7464 11.9091 14.9841 11.9091H2.56233C1.80006 11.9091 1.18213 11.2986 1.18213 10.5455V2.36364C1.18213 1.61052 1.80006 1 2.56233 1Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span :class="{ hidden: navActs }">Cüzdan</span>
            </MenuItem>
          </div>
        </div>
        <div class="bottomMenu pt-16">
          <div class="general">
            <MenuItem active>
              <svg
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.3175 6.25C6.49383 5.74875 6.84186 5.32608 7.29997 5.05685C7.75807 4.78762 8.29667 4.6892 8.82038 4.77903C9.34409 4.86886 9.81911 5.14114 10.1613 5.54765C10.5035 5.95415 10.6908 6.46864 10.69 7C10.69 8.5 8.44 9.25 8.44 9.25M8.5 12.25H8.5075M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span :class="{ hidden: navActs }">Yardım</span>
            </MenuItem>
            <MenuItem active="settings">
              <svg
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 10.5455C9.62967 10.5455 10.5455 9.62967 10.5455 8.5C10.5455 7.37033 9.62967 6.45455 8.5 6.45455C7.37033 6.45455 6.45455 7.37033 6.45455 8.5C6.45455 9.62967 7.37033 10.5455 8.5 10.5455Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5455 10.5455C13.4547 10.7511 13.4276 10.9792 13.4677 11.2004C13.5078 11.4216 13.6133 11.6257 13.7705 11.7864L13.8114 11.8273C13.9382 11.9539 14.0387 12.1043 14.1074 12.2699C14.176 12.4354 14.2113 12.6128 14.2113 12.792C14.2113 12.9712 14.176 13.1487 14.1074 13.3142C14.0387 13.4798 13.9382 13.6302 13.8114 13.7568C13.6847 13.8836 13.5343 13.9842 13.3688 14.0528C13.2032 14.1214 13.0258 14.1568 12.8466 14.1568C12.6674 14.1568 12.4899 14.1214 12.3244 14.0528C12.1589 13.9842 12.0085 13.8836 11.8818 13.7568L11.8409 13.7159C11.6802 13.5587 11.4761 13.4533 11.2549 13.4132C11.0338 13.3731 10.8056 13.4001 10.6 13.4909C10.3983 13.5773 10.2264 13.7208 10.1052 13.9038C9.98407 14.0867 9.91906 14.3011 9.91818 14.5205V14.6364C9.91818 14.998 9.77451 15.3449 9.51878 15.6006C9.26305 15.8563 8.9162 16 8.55455 16C8.19289 16 7.84604 15.8563 7.59031 15.6006C7.33458 15.3449 7.19091 14.998 7.19091 14.6364V14.575C7.18563 14.3493 7.11258 14.1305 6.98126 13.9468C6.84993 13.7632 6.66641 13.6234 6.45455 13.5455C6.2489 13.4547 6.02078 13.4276 5.7996 13.4677C5.57842 13.5078 5.37433 13.6133 5.21364 13.7705L5.17273 13.8114C5.04608 13.9382 4.89569 14.0387 4.73015 14.1074C4.5646 14.176 4.38716 14.2113 4.20795 14.2113C4.02875 14.2113 3.85131 14.176 3.68576 14.1074C3.52022 14.0387 3.36983 13.9382 3.24318 13.8114C3.1164 13.6847 3.01582 13.5343 2.94719 13.3688C2.87857 13.2032 2.84325 13.0258 2.84325 12.8466C2.84325 12.6674 2.87857 12.4899 2.94719 12.3244C3.01582 12.1589 3.1164 12.0085 3.24318 11.8818L3.28409 11.8409C3.44128 11.6802 3.54672 11.4761 3.58682 11.2549C3.62693 11.0338 3.59985 10.8056 3.50909 10.6C3.42266 10.3983 3.27915 10.2264 3.09623 10.1052C2.9133 9.98407 2.69895 9.91906 2.47955 9.91818H2.36364C2.00198 9.91818 1.65513 9.77451 1.3994 9.51878C1.14367 9.26305 1 8.9162 1 8.55455C1 8.19289 1.14367 7.84604 1.3994 7.59031C1.65513 7.33458 2.00198 7.19091 2.36364 7.19091H2.425C2.65068 7.18563 2.86955 7.11258 3.05316 6.98126C3.23677 6.84993 3.37662 6.66641 3.45455 6.45455C3.54531 6.2489 3.57238 6.02078 3.53228 5.7996C3.49217 5.57842 3.38673 5.37433 3.22955 5.21364L3.18864 5.17273C3.06185 5.04608 2.96127 4.89569 2.89265 4.73015C2.82402 4.5646 2.7887 4.38716 2.7887 4.20795C2.7887 4.02875 2.82402 3.85131 2.89265 3.68576C2.96127 3.52022 3.06185 3.36983 3.18864 3.24318C3.31528 3.1164 3.46567 3.01582 3.63122 2.94719C3.79676 2.87857 3.97421 2.84325 4.15341 2.84325C4.33261 2.84325 4.51006 2.87857 4.6756 2.94719C4.84114 3.01582 4.99154 3.1164 5.11818 3.24318L5.15909 3.28409C5.31978 3.44128 5.52387 3.54672 5.74505 3.58682C5.96623 3.62693 6.19435 3.59985 6.4 3.50909H6.45455C6.65621 3.42266 6.82819 3.27915 6.94934 3.09623C7.07048 2.9133 7.13549 2.69895 7.13636 2.47955V2.36364C7.13636 2.00198 7.28003 1.65513 7.53576 1.3994C7.7915 1.14367 8.13834 1 8.5 1C8.86166 1 9.2085 1.14367 9.46424 1.3994C9.71997 1.65513 9.86364 2.00198 9.86364 2.36364V2.425C9.86451 2.6444 9.92952 2.85876 10.0507 3.04168C10.1718 3.22461 10.3438 3.36812 10.5455 3.45455C10.7511 3.54531 10.9792 3.57238 11.2004 3.53228C11.4216 3.49217 11.6257 3.38673 11.7864 3.22955L11.8273 3.18864C11.9539 3.06185 12.1043 2.96127 12.2699 2.89265C12.4354 2.82402 12.6128 2.7887 12.792 2.7887C12.9712 2.7887 13.1487 2.82402 13.3142 2.89265C13.4798 2.96127 13.6302 3.06185 13.7568 3.18864C13.8836 3.31528 13.9842 3.46567 14.0528 3.63122C14.1214 3.79676 14.1568 3.97421 14.1568 4.15341C14.1568 4.33261 14.1214 4.51006 14.0528 4.6756C13.9842 4.84114 13.8836 4.99154 13.7568 5.11818L13.7159 5.15909C13.5587 5.31978 13.4533 5.52387 13.4132 5.74505C13.3731 5.96623 13.4001 6.19435 13.4909 6.4V6.45455C13.5773 6.65621 13.7208 6.82819 13.9038 6.94934C14.0867 7.07048 14.3011 7.13549 14.5205 7.13636H14.6364C14.998 7.13636 15.3449 7.28003 15.6006 7.53576C15.8563 7.7915 16 8.13834 16 8.5C16 8.86166 15.8563 9.2085 15.6006 9.46424C15.3449 9.71997 14.998 9.86364 14.6364 9.86364H14.575C14.3556 9.86451 14.1412 9.92952 13.9583 10.0507C13.7754 10.1718 13.6319 10.3438 13.5455 10.5455Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span :class="{ hidden: navActs }">Ayarlar</span>
            </MenuItem>
          </div>
        </div>
      </perfect-scrollbar>
      <Account :navState="navActs" />
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import Logo from "./logo.vue";
import MenuItem from "./menuItem.vue";
import Account from "./account.vue";
import { useStateStore } from "@/stores/store.js";
const stateStore = useStateStore();

// Logo Configure
const logo = ref({
  height: "38",
  color: "#fff",
});
const navActs = ref(false);

provide("logo", logo.value);

// Notification Configure
const notification = ref(true);

//Navigation Configure
const navActive = ref("home");
provide("navActive", navActive.value);

const search = () => {
  stateStore.setSearch();
};

const navAc = () => {
  navActs.value = !navActs.value;
};

const windowWidth = ref(window.innerWidth);

const breakpoints = () => {
  if (windowWidth.value < 1536) navActs.value = true;
  else navActs.value = false;
};

onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    breakpoints();
  });
  breakpoints();
});
</script>

<style lang="scss" scoped>
.nav {
  @apply transition-all duration-200 w-[285px] flex-shrink-0 pt-12 pb-6 relative;
  &.closed {
    @apply w-[85px];
  }
  .content {
    @apply h-full w-full space-y-2 flex flex-col items-start after:pointer-events-none after:w-full after:h-12 after:bg-gradient-to-b after:from-dark-100 after:content-[''] after:absolute after:top-24  before:z-10 before:pointer-events-none before:w-full before:h-12 before:bg-gradient-to-t before:from-dark-100 before:content-[''] before:absolute before:bottom-20;

    .menu {
      @apply h-full w-full px-4 space-y-2 flex overflow-x-visible flex-col justify-between py-10 relative;
      .topMenu {
        @apply transition-all duration-200;
      }
      .menuInfo {
        @apply transition-all duration-200 text-l12 px-4 font-bold text-bn-gray-700 mt-3 mb-2 select-none;
      }

      .general,
      .other {
        @apply space-y-2;
      }
    }
  }
}
</style>
