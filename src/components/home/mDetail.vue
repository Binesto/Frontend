<template>
    <div class="swp-contain">
        <div class="swp-contain__wrap">
            <div class="swp-contain__wrap__contain">
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
                    class="swp-contain__wrap__contain__swiper">
                    <swiper-slide class="swp-contain__wrap__contain__swiper__slide">
                        <div class="swp-slide">
                            <span class="swp-slide__overlay"></span>
                            <div class="swp-slide__content">
                                <span class="swp-slide__content__title">24s Hacim</span>
                                <div class="swp-slide__content__detail" direction="right" unit="ETH">
                                    54,067.75
                                </div>
                                <span class="swp-slide__content__percentile drop">%2.17</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swp-contain__wrap__contain__swiper__slide">
                        <div class="swp-slide">
                            <span class="swp-slide__overlay"></span>
                            <div class="swp-slide__content">
                                <span class="swp-slide__content__title">24 Saatlik Değişim</span>
                                <div class="swp-slide__content__detail" direction="left" unit="₺">
                                    54,067.75
                                </div>
                                <span class="swp-slide__content__percentile drop">%2.17</span>
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
.swp-contain{
    @apply mt-4 flex relative overflow-visible;
    &__wrap{
        @apply flex h-full w-full;
        &__contain{
            @apply w-full h-full;
            &__swiper{
                @apply w-full overflow-hidden;
                &__slide{
                    @apply w-full h-full;
                    .swp-slide{
                        @apply flex flex-shrink-0 items-center px-8 relative;
                        &__overlay{
                            @apply absolute h-4/6 w-0.5 rounded-full right-0 bg-bn-gray-900;
                        }
                        &__content{
                            @apply py-2 space-y-2;
                            &__title{
                                @apply font-medium text-bn-gray-400 text-xs;
                            }
                            &__detail{
                                @apply text-xl font-bold inline-flex items-end;
                                &[direction="left"]{
                                    @apply before:content-[attr(unit)] before:text-xl before:font-bold before:text-bn-gray-500;
                                }
                                &[direction="right"]{
                                    @apply after:content-[attr(unit)] after:ml-1 after:text-sm after:font-bold after:text-bn-gray-500;
                                }
                            }
                            &__percentile{
                                @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-gray-500/20 text-bn-gray-500 tracking-wide;
                            }
                            .drop{
                                @apply bg-bn-red/20 text-bn-red before:content-['-'];
                            }
                            .rise{
                                @apply bg-bn-green/20 text-bn-green;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>


