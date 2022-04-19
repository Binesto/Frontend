<template>
    <div class="mt-4 flex relative overflow-visible">
        <div class="flex h-full w-full min-h-24">
            <div class="w-full h-full ">
                <swiper
                    :slides-per-view="4"
                    :space-between="0"
                    :loop="true"
                    :breakpoints="{
                        320: {
                            slidesPerView: 2,
                        },
                        1408: {
                            slidesPerView: 3,
                        },
                        1640: {
                            slidesPerView: 4,
                        },
                    }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    class="w-full overflow-visible"
                >
                    <swiper-slide class="w-full h-full">
                        <div class="flex flex-shrink-0 items-center px-8 relative">
                            <span class="absolute h-4/6 w-0.5 rounded-full right-0 bg-bn-gray-900"></span>
                            <div class="py-2 space-y-2">
                                <span class="font-medium text-bn-gray-400 text-xs">Piyasa Değeri</span>
                                <div class="text-xl font-bold">
                                    <span class="text-bn-gray-600">₺</span>54,067.75
                                </div>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-red/20 text-bn-red tracking-wide"
                                >-%2.17</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="w-full h-full">
                        <div class="flex flex-shrink-0 items-center px-8 relative">
                            <span class="absolute h-4/6 w-0.5 rounded-full right-0 bg-bn-gray-900"></span>
                            <div class="py-2 space-y-2">
                                <span class="font-medium text-bn-gray-400 text-xs">24s Hacim</span>
                                <div class="text-xl font-bold">
                                    <span class="text-bn-gray-600">₺</span>54,067.75
                                </div>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-green/20 text-bn-green tracking-wide"
                                >%2.17</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="w-full h-full">
                        <div class="flex flex-shrink-0 items-center px-8 relative">
                            <span class="absolute h-4/6 w-0.5 rounded-full right-0 bg-bn-gray-900"></span>
                            <div class="py-2 space-y-2">
                                <span class="font-medium text-bn-gray-400 text-xs">24 Saatlik Değişim</span>
                                <div class="text-xl font-bold">
                                    <span class="text-bn-gray-600">₺</span>54,067.75
                                </div>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-red/20 text-bn-red tracking-wide"
                                >-%2.17</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="w-full h-full">
                        <div class="flex flex-shrink-0 items-center px-8 relative">
                            <span class="absolute h-4/6 w-0.5 rounded-full right-0 bg-bn-gray-900"></span>
                            <div class="py-2 space-y-2">
                                <span class="font-medium text-bn-gray-400 text-xs">Piyasa Değeri</span>
                                <div class="text-xl font-bold">
                                    <span class="text-bn-gray-600">₺</span>54,067.75
                                </div>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-red/20 text-bn-red tracking-wide"
                                >-%2.17</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <nextBtn />
                </swiper>
            </div>
            
        </div>
    </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import nextBtn from './detail/nextBtn.vue';
import 'swiper/css';

const onSwiper = (swiper) => {
    // console.log(swiper);
};

const onSlideChange = () => {
    // console.log('slide change');
};

</script>

<style lang="scss" scoped>
</style>