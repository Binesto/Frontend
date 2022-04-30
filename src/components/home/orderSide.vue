<template>
  <div class="order">
    <div class="order__wrap">
      <orderSide title="Alış Emri" type="buy" />
      <orderSide title="Satış Emri" type="sell" />
    </div>
  </div>
</template>

<script setup>
import orderSide from './order/side.vue';
</script>

<style lang="scss" scoped>
.order {
  @apply w-full h-full bg-dark-100 border-2 border-bn-gray-800/20 rounded-3xl overflow-hidden;
  &__wrap {
    @apply w-full h-full flex divide-x divide-bn-gray-900;
  }
}
</style>
