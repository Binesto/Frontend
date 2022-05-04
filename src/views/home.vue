<template>
  <perfect-scrollbar>
    <div class="h-48">
      <heading />
    </div>
    <div class="-mt-12 px-16 flex">
      <mainStatistic />
    </div>
    <div class="w-full mt-8 space-x-8 flex px-16 pb-16">
      <orderSide />
      <processSide />
    </div>
  </perfect-scrollbar>
</template>

<script setup>
// import { defineAsyncComponent } from "vue";

// This is a way to load a component asynchronously.
// const heading = defineAsyncComponent(() =>
//   import("@/components/home/heading.vue")
// );
// const mainStatistic = defineAsyncComponent(() =>
//   import("@/components/home/mStatistic.vue")
// );
// const orderSide = defineAsyncComponent(() =>
//   import("@/components/home/orderSide.vue")
// );
// const processSide = defineAsyncComponent(() =>
//   import("@/components/home/processSide.vue")
// );

import heading from "../components/home/heading.vue";
import mainStatistic from "../components/home/mStatistic.vue";
import orderSide from "../components/home/orderSide.vue";
import processSide from "../components/home/processSide.vue";
</script>

<style lang="scss" scoped></style>
