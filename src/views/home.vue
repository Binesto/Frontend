<template>
    <div class="h-56">
        <suspense>
            <template #default>
                <heading />
            </template>
            <template #fallback>
                <div class="skeleton h-full items-center flex px-16">
                    <div class="space-x-3 flex items-center file:animate-pulse">
                        <div class="h-16 w-16 bg-white/5 rounded-xl"></div>
                        <div class="space-y-3">
                            <div class="paragraph"></div>
                            <div class="title"></div>
                        </div>
                    </div>
                </div>
            </template>
        </suspense>
    </div>
    <div class="-mt-12 px-16 flex">
        <suspense>
            <template #default>
                <mainStatistic />
            </template>
            <template #fallback>
                <div class="skeleton h-[203px]">
                    <div class="wrap">
                        <div class="card">
                            <div class="title"></div>
                            <div class="paragraph"></div>
                        </div>
                    </div>
                    <div class="wrap">
                        <div class="card">
                            <div class="title"></div>
                            <div class="paragraph"></div>
                        </div>
                    </div>
                </div>
            </template>
        </suspense>
    </div>
    <div class="w-full h-96 mt-8 space-x-8 flex px-16">
        <orderSide />
        <processSide />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

// This is a way to load a component asynchronously.
const heading = defineAsyncComponent(() => import('@/components/home/heading.vue'));
const mainStatistic = defineAsyncComponent(() => import('@/components/home/mStatistic.vue'));
const orderSide = defineAsyncComponent(() => import('@/components/home/orderSide.vue'));
const processSide = defineAsyncComponent(() => import('@/components/home/processSide.vue'));
</script>

<style lang="scss" scoped>
/* TODO: özel css dosyası oluştur (evet sırf bunun için) */

.skeleton {
    @apply flex w-full space-x-4 animate-pulse;
    .wrap {
        @apply bg-dark-200 overflow-hidden w-1/2 rounded-3xl h-full;
    }
    .card {
        @apply w-full p-8 bg-dark-100 space-y-3 h-full;
    }
    .paragraph {
        @apply relative bg-white/5 rounded-md w-40 h-3;
    }
    .title {
        @apply text-2xl bg-white/10 rounded-lg font-bold w-36 h-4;
    }
}
</style>