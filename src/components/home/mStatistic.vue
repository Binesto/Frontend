<template>
    <div class="main">
        <div class="mstat">
            <div class="absolute left-0 h-full bg-gradient-to-l from-transparent to-dark-100 w-full z-10"></div>
            <div class="space-y-2 z-10">
                <span class="font-bold text-bn-gray-400 text-sm">Eth</span>
                <div class="text-2xl font-bold">
                    <span class="text-bn-gray-600">₺</span>54,067.75
                </div>
                <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-red/20 text-bn-red tracking-wide"
                >-%2.17</span>
            </div>
            <staticChart />
        </div>
        <div class="mdetail">
            <span class="font-bold text-bn-gray-600 text-sm pt-9 pl-8">Detay</span>
            <mDetail />
        </div>
    </div>
</template>

<script setup>
import staticChart from './detail/staticChart.vue'
import mDetail from './mDetail.vue'
</script>


<style lang="scss" scoped>
.main {
    @apply w-full flex space-x-6;
    .mstat,
    .mdetail {
        @apply bg-dark-100 border-2 border-bn-gray-800/20 w-1/2 rounded-3xl flex relative;
    }
    .mstat {
        @apply justify-between items-center overflow-hidden p-8;
    }
    .mdetail {
        @apply flex-col pb-8;
    }
}
</style>