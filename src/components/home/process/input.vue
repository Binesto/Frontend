<template>
  <div
    class="processInput"
    :unit="unit"
    :currency="currency"
    :class="{ disabled: disabled }"
  >
    <div class="processInput__title">{{ title }}</div>
    <input type="text" :placeholder="placeholder" :disabled="disabled" />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  placeholder: String,
  unit: String,
  currency: Boolean,
  disabled: Boolean,
});
</script>

<style lang="scss" scoped>
.processInput {
  @apply transition-opacity duration-200 w-full bg-bn-gray-900/40 flex items-center rounded-lg pl-4 overflow-hidden gap-4 relative after:z-10 after:absolute after:content-[attr(unit)] after:font-bold after:text-bn-gray-500 after:right-2 after:uppercase after:text-xs after:bg-dark-100 after:px-4 after:py-2 after:rounded-md after:w-12 after:flex after:justify-center after:h-5/6 after:items-center;
  &[currency="true"] {
    @apply after:text-sm;
  }
  &__title {
    @apply text-xs font-bold text-bn-gray-500 w-16 text-center;
  }
  &.disabled {
    @apply opacity-30 cursor-not-allowed;
    input{
        @apply pointer-events-none
    }
  }
  input {
    @apply w-full px-2 py-3 font-bold text-xs bg-bn-gray-900/80 focus:outline-none focus:bg-dark-200;
    &::placeholder {
      @apply text-bn-gray-700 capitalize;
    }
  }
}
</style>
