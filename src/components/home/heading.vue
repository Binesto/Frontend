<template>
    <div class="heading">
        <div class="heading__wrap">
            <div class="rounded-xl h-14 w-14 bg-white/5 flex items-center justify-center">
                <svg
                    width="20"
                    height="34"
                    viewBox="0 0 20 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.823 25L3.8147e-06 19.203L9.817 33.042L19.645 19.203L9.817 25H9.823ZM9.82302 0L0.00402451 16.297L9.82302 22.104L19.646 16.303L9.82302 0Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div>
                <div class="text-xs font-semibold text-white/60">ETH</div>
                <div class="text-lg font-bold">Etherium - TRY</div>
            </div>
            <svg
                class="h-72 w-72 absolute -top-5 -right-10 -rotate-12 text-white/5"
                viewBox="0 0 20 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.823 25L3.8147e-06 19.203L9.817 33.042L19.645 19.203L9.817 25H9.823ZM9.82302 0L0.00402451 16.297L9.82302 22.104L19.646 16.303L9.82302 0Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.heading {
    @apply  w-full bg-[#37367B]/10 h-full items-center flex relative overflow-hidden;
    &__wrap{
        @apply flex px-16 space-x-3 items-center max-w-[100rem] mx-auto w-full;
    }
}
</style>