<template>
    <div class="heading"></div>
    <div class="-mt-12 px-24 flex">
        <suspense>
            <template #default>
                <mainStatistic />
            </template>
            <template #fallback>
                <div class="skeleton">
                    <div class="wrap">
                        <div class="card"></div>
                    </div>
                    <div class="wrap">
                        <div class="card"></div>
                    </div>
                </div>
            </template>
        </suspense>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

// This is a way to load a component asynchronously.
const mainStatistic = defineAsyncComponent(() => import('@/components/home/mStatistic.vue'));
</script>

<style lang="scss" scoped>
.heading {
    @apply w-full bg-[#37367B] h-56;
}

.skeleton {
    @apply flex w-full;
    .wrap {
        @apply bg-dark-200 rounded-2xl overflow-hidden w-1/2;
        .card {
            @apply w-full p-8 bg-[#202020] animate-pulse;
        }
    }
}
</style>