<template>
  <div class="">
    <div>{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.main{
    @apply w-full
}
</style>
