<template>
    <div class="h-full absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
        <button
            @click="swiper.slideNext()"
            class="focus:outline-none transition h-full px-4 flex items-center mr-5 bg-bn-gray-900 hover:bg-bn-gray-800 rounded-lg cursor-pointer z-20 text-gray-300 hover:text-gray-100"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
        <div
            class="w-48 right-0 top-0 h-full absolute bg-gradient-to-r from-transparent to-dark-100 -z-10 pointer-events-none"
        ></div>
    </div>
</template>
<script>
import { useSwiper } from 'swiper/vue';

export default {
    setup() {
        const swiper = useSwiper();
        return {
            swiper,
        };
    },
};
</script>