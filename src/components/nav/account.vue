<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <Menu as="div" class="z-10 w-full pl-1.5 pr-7 mx-3 relative !mt-1">
        <div>
            <MenuButton class="account" :class="{'px-4':!props.navState}">
                <div class="account-wrap">
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/47571500?v=4" />
                    </div>
                    <div class="account-detail" v-if="!props.navState">
                        <p class="account-name">Fatih Yıldız</p>
                        <p class="account-mail">0m.fatih.yildiz@gmail.com</p>
                    </div>
                </div>
                <svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!props.navState">
                    <path
                        d="M9 6L5 1.2L1 6"
                        stroke="#353E42"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M1 12L5 16.8L9 12"
                        stroke="#353E42"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems class="menuItems" :class="{minimized:props.navState}">
                <div class="divide">
                    <MenuItem class="menuItem">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                            Değişiklik Günlüğü
                        </button>
                    </MenuItem>
                </div>
                <div class="divide">
                    <MenuItem class="menuItem">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            Çıkış yap
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const props = defineProps({
  navState: Boolean,
});

</script>

<style lang="scss" scoped>
.account {
    @apply mx-auto flex justify-between items-center flex-shrink-0 py-3 rounded-lg w-full hover:bg-bn-gray-400/5;
    .account-wrap {
        @apply flex items-center flex-shrink-0 mx-auto;
        img {
            @apply flex h-8 w-8 rounded-full flex-shrink-0;
        }
        .account-detail {
            @apply ml-3 text-left;
            .account-name {
                @apply text-sm font-medium text-bn-gray-200 group-hover:text-gray-900;
            }
            .account-mail {
                @apply text-xs font-medium text-bn-gray-500 group-hover:text-gray-700;
            }
        }
    }
    svg {
        @apply w-5 h-5;
    }
}
.menuItems {
    @apply absolute left-1.5 bottom-[70px] mt-2 w-[260px] bg-dark-200 divide-y divide-dark-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-white/5;
    &.minimized{
        @apply w-[220px] z-20
    }
    .divide {
        @apply p-2;
        button {
            @apply hover:bg-primary/80 text-bn-gray-500 hover:text-white flex rounded-md items-center w-full px-2 py-2 text-xs font-medium;
        }
    }
}
</style>