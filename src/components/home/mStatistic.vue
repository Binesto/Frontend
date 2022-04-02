<template>
    <div class="main">
        <div class="mstat">test</div>
        <div class="mdetail">test</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main {
    @apply w-full flex space-x-6;
    .mstat, .mdetail {
       @apply bg-[#0D0D0D] w-1/2 rounded-2xl p-8;
    }
}
</style>