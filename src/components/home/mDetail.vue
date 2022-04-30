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
          class="swp-contain__wrap__contain__swpr"
        >
          <swiper-slide class="swp-contain__wrap__contain__swpr__slide">
            <div class="swp-slide">
              <span class="swp-slide__overlay"></span>
              <div class="swp-slide__content">
                <span class="swp-slide__content__title">24s Değişim </span>
                <div
                  class="swp-slide__content__detail"
                  direction="left"
                  unit="₺"
                >
                  54,067.75
                </div>
                <div class="swp-slide__content__percentile" status="drop">
                  <svg
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.28497 1.8582C10.062 0.564195 11.938 0.564195 12.715 1.8582L21.183 15.9712C21.983 17.3042 21.023 19.0002 19.468 19.0002H2.53197C0.977968 19.0002 0.0179677 17.3042 0.816968 15.9712L9.28497 1.8582V1.8582Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span>12.04%</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swp-contain__wrap__contain__swpr__slide">
            <div class="swp-slide">
              <span class="swp-slide__overlay"></span>
              <div class="swp-slide__content">
                <span class="swp-slide__content__title">24s En Yüksek</span>
                <div
                  class="swp-slide__content__detail"
                  direction="left"
                  unit="₺"
                >
                  54,067.75
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swp-contain__wrap__contain__swpr__slide">
            <div class="swp-slide">
              <span class="swp-slide__overlay"></span>
              <div class="swp-slide__content">
                <span class="swp-slide__content__title">24s En Düşük</span>
                <div
                  class="swp-slide__content__detail"
                  direction="right"
                  unit="ETH"
                >
                  54,067.75
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="swp-contain__wrap__contain__swpr__slide">
            <div class="swp-slide">
              <span class="swp-slide__overlay"></span>
              <div class="swp-slide__content">
                <span class="swp-slide__content__title">24s Hacim</span>
                <div
                  class="swp-slide__content__detail"
                  direction="right"
                  unit="ETH"
                >
                  54,067.75
                </div>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import nextBtn from "./detail/nextBtn.vue";
import "swiper/css";

const onSwiper = (swiper) => {
  // console.log(swiper);
};

const onSlideChange = () => {
  // console.log('slide change');
};
</script>
<style lang="scss" scoped>
.swp-contain {
  @apply mt-4 flex relative overflow-visible;
  &__wrap {
    @apply flex h-full w-full;
    &__contain {
      @apply w-full h-full;
      &__swpr {
        @apply w-full h-full overflow-hidden;
        &__slide {
          @apply w-full h-full;
          .swp-slide {
            @apply flex flex-shrink-0 h-full items-center px-8 relative;
            &__overlay {
              @apply absolute h-4/6 w-0.5 rounded-full right-0 bg-bn-gray-900;
            }
            &__content {
              @apply py-2 space-y-2;
              &__title {
                @apply font-medium text-bn-gray-400 text-xs flex flex-shrink-0 w-56;
              }
              &__detail {
                @apply text-xl font-bold inline-flex items-end;
                &[direction="left"] {
                  @apply before:content-[attr(unit)] before:text-xl before:font-bold before:text-bn-gray-500;
                }
                &[direction="right"] {
                  @apply after:content-[attr(unit)] after:ml-1 after:text-sm after:font-bold after:text-bn-gray-500;
                }
              }
              &__percentile {
                @apply hidden items-center rounded-full text-xs font-bold text-bn-gray-500 tracking-wide -mt-2;
                svg {
                  @apply w-2 h-2 mr-1;
                }
                &[status="rise"] {
                  @apply flex text-bn-green;
                }
                &[status="drop"] {
                  @apply flex text-bn-red;
                  svg {
                    @apply transform rotate-180;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
