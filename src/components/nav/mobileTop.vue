<template>
  <div v-if="windowWidth < 640" class="nav">
    <div class="logo">
      <Logo :navstatus="true" />
    </div>
    <div class="navigate">
      <MenuItem @click="search" active>
        <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 16L12.375 12.375M14.3333 7.66666C14.3333 11.3486 11.3486 14.3333 7.66666 14.3333C3.98476 14.3333 1 11.3486 1 7.66666C1 3.98476 3.98476 1 7.66666 1C11.3486 1 14.3333 3.98476 14.3333 7.66666Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </MenuItem>
      <div class="relative">
        <MenuItem
          active="notification"
          :notification="notification"
          :navState="true"
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
        </MenuItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import Logo from "./logo.vue";
import MenuItem from "./menuItem.vue";
import { useStateStore } from "@/stores/store.js";
const stateStore = useStateStore();

const logo = ref({
  height: "38",
  color: "#fff",
});
provide("logo", logo.value);
const navActs = ref(false);
const notification = ref(true);
const search = () => {
  stateStore.setSearch();
};

const windowWidth = ref(window.innerWidth);

const breakpoints = () => {
  if (windowWidth.value > 1536) navActs.value = true;
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
  @apply flex w-full justify-between items-center h-24 fixed z-40 px-4 bg-gradient-to-b from-dark-100;
  .logo{
      @apply flex w-1/2 -ml-6
  }
  .navigate {
    @apply inline-flex space-x-4 w-1/2 justify-end pl-4;
  }
}
</style>
