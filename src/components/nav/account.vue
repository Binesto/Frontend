<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <Menu as="div" class="w-full relative">
        <div>
            <MenuButton class="account">
                <div class="account-wrap">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="avatar"
                        />
                    </div>
                    <div class="account-detail">
                        <p class="account-name">Fatih Yıldız</p>
                        <p class="account-mail">0m.fatih.yildiz@gmail.com</p>
                    </div>
                </div>
                <svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <MenuItems class="menuItems">
                <div class="divide">
                    <MenuItem class="menuItem">
                        <button>Duplicate</button>
                    </MenuItem>
                </div>
                <div class="divide">
                    <MenuItem class="menuItem">
                        <button>Duplicate</button>
                    </MenuItem>
                    <MenuItem class="menuItem">
                        <button>Duplicate</button>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<style lang="scss" scoped>
.account {
    @apply flex justify-between items-center flex-shrink-0 px-4 py-3 rounded-lg w-full mt-4 hover:bg-bn-gray-400/5;
    .account-wrap {
        @apply flex items-center;
        img {
            @apply inline-block h-8 w-8 rounded-full;
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
    svg{
        @apply w-5 h-5;
    }
}
.menuItems {
    @apply absolute left-0 bottom-[70px] w-full mt-2 bg-dark-200 divide-y divide-dark-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none;
    .divide {
        @apply p-2;
        button {
            @apply hover:bg-primary/80 text-bn-gray-500 hover:text-white flex rounded-md items-center w-full px-2 py-2 text-sm;
        }
    }
}
</style>