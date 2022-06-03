<template>
    <div class="error">
        <div class="error__content">
            <div class="error__content__info">
                <h1 class="error__content__info__title">
                    404
                    <span>hmm...</span>
                </h1>
                <p
                    class="error__content__info__text"
                >Sanırım Kayboldunuz çünkü aradığınız sayfayı bulamıyoruz</p>
                <router-link to="/">
                    <button class="primary mt-4">Ana Sayfaya Geri Dön</button>
                </router-link>
            </div>
            <div class="satellite">
                <img class="h-full" src="@/assets/404.svg" alt="404" draggable="false" />
            </div>
        </div>
        <div class="absolute bottom-0 w-full h-24 flex items-center justify-center z-10">
            <nav class="flex space-x-4">
                <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-300">API Durumu</a>
                <span class="inline-block border-l border-bn-gray-800" aria-hidden="true" />
                <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-300">Twitter</a>
            </nav>
        </div>
        <div class="wallpaper">
            <div class="borealis-shade"></div>
            <div class="stars">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.error {
    @apply h-full w-full flex flex-col items-center justify-center relative select-none;
    &__content {
        @apply px-4 sm:px-0 w-full h-full items-center flex justify-center z-10 space-x-16;
        &__info {
            @apply text-left max-w-md;
            &__title {
                @apply text-left text-6xl font-extrabold text-primary;
                span {
                    @apply text-white text-4xl ml-2;
                }
            }
            &__text {
                @apply px-1 sm:text-sm text-bn-gray-500 font-medium mt-2;
            }
        }
        .satellite {
            @apply w-96 h-96 hidden sm:block;
            animation: animatesatlite 3.5s infinite alternate ease-in-out;
        }
    }
    .wallpaper {
        @apply absolute inset-0;
        .borealis-shade {
            @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2;
            height: 40vh;
            width: 40vh;
            max-width: 600px;
            max-height: 600px;
            background: rgba(182, 57, 254, 0.2);
            border-radius: 50%;
            filter: blur(200px);
        }
        .stars {
            @apply inset-0 absolute;
            .star {
                @apply w-1.5 h-1.5 bg-white/5 rounded-full m-10 absolute;
            }
            .star:nth-child(1) {
                left: 170px;
                top: 435px;
            }
            .star:nth-child(2) {
                right: 970px;
                top: 520px;
            }
            .star:nth-child(3) {
                right: 50px;
                top: 107px;
            }
            .star:nth-child(4) {
                right: 750px;
                top: 233px;
            }
            .star:nth-child(5) {
                left: 99px;
                bottom: 175px;
            }
            .star:nth-child(6) {
                left: 500px;
                bottom: 80px;
            }
            .star:nth-child(7) {
                right: 114px;
                bottom: 66px;
            }
            .star:nth-child(8) {
                left: 128px;
                top: 16px;
            }
            .star:nth-child(9) {
                left: 28px;
                top: 216px;
            }
            .star:nth-child(10) {
                right: 628px;
                bottom: 316px;
            }
            .star:nth-child(11) {
                left: 628px;
                top: 16px;
            }
            .star:nth-child(12) {
                right: 158px;
                bottom: 606px;
            }
        }
    }
}

/* animation */

@-moz-keyframes animatesatlite {
    from {
        transform: translate(0px, 0px);
    }
    to {
        transform: translate(0px, -30px);
    }
}
@-webkit-keyframes animatesatlite {
    from {
        transform: translate(0px, 0px);
    }
    to {
        transform: translate(0px, -30px);
    }
}
@keyframes animatesatlite {
    from {
        transform: translate(0px, 0px);
    }
    to {
        transform: translate(0px, -30px);
    }
}
</style>