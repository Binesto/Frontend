<template>
    <div class="main">
        <div class="mstat">
            <div class="mstat__overlay"></div>
            <div class="mstat__content">
                <span class="mstat__content__title">Eth</span>
                <div class="mstat__content__detail">
                    <span class="mstat__content__detail__unit">₺</span>54,067.75
                </div>
                <span class="mstat__content__percentile rise">%2.17</span>
            </div>
            <staticChart />
        </div>
        <div class="mdetail">
            <span class="mdetail__title">Detay</span>
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
        &__overlay{
            @apply absolute left-0 h-full bg-gradient-to-l from-transparent to-dark-100 w-full z-10
        }
        &__content{
            @apply space-y-2 z-10;
            &__title{
                @apply font-bold text-bn-gray-400 text-sm;
            }
            &__detail{
                @apply text-2xl font-bold;
                &__unit{
                    @apply text-bn-gray-600;
                }
            }
            &__percentile{
                @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide;
            }
            .drop{
                @apply bg-bn-red/20 text-bn-red before:content-['-'];
            }
            .rise{
                @apply bg-bn-green/20 text-bn-green;
            }
        }
    }
    .mdetail {
        @apply flex-col pb-8;
        &__title {
            @apply font-bold text-bn-gray-600 text-sm pt-9 pl-8;
        }
    }
}
</style>