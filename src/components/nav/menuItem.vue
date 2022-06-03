<template>
  <button
    @click="routeCheck"
    class="item"
    :class="props.active == route.name ? 'active' : ''"
  >
    <div>
      <slot></slot>
    </div>
    <TransitionRoot
      :show="props.notification"
      enter="transition-all transform duration-150"
      enter-from="opacity-0 scale-75"
      enter-to="opacity-100 scale-100"
      leave="transition-all transform duration-150"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-75"
    >
      <div class="notification" :class="{'minimized':props.navState}">{{ props.navState ? null : 5 }}</div>
    </TransitionRoot>
  </button>
</template>

<script setup>
import { TransitionRoot } from "@headlessui/vue";
import { ref, inject, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps({
  notification: Boolean,
  active: String,
  navState: Boolean,
});

if (props.notification) {
  console.log("notification");
  console.log(props.navState);
}

const active = inject("navActive");
// router
const router = useRouter();
const route = useRoute();

const routeCheck = () => {
  router.push(props.active === "home" ? "/" : props.active);
};

</script>

<style lang="scss">
.item {
  @apply flex text-gray-400 justify-between items-center transition-colors duration-100 sm:w-full px-4 h-12 rounded-lg text-xs text-left capitalize hover:text-gray-300 active:text-gray-200 hover:bg-bn-gray-400/5 active:bg-bn-gray-400/10 select-none focus:outline-none focus:ring-2 focus:ring-bn-gray-800;
  div {
    @apply flex space-x-4 items-center;
    svg {
      @apply w-5 h-5;
    }
    path.active {
      @apply hidden;
    }
    span {
      @apply font-semibold;
    }
  }
  .notification {
    @apply transition-all duration-200 bg-primary text-white px-2 py-1 text-[12px] rounded-md font-medium;
    &.minimized{
      @apply overflow-hidden h-2 w-2 p-0 right-1/2 transform -translate-x-1 translate-y-1 absolute
    }
  }
}
.item.active {
  @apply bg-primary/10 text-primary focus:ring-0 focus:ring-transparent cursor-pointer;
  path.active {
    @apply block;
  }
  path.deactive{
    @apply hidden;
  }
}

.closed{
  .item{
  }
}

</style>
