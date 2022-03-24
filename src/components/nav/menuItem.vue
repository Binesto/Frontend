<template>
    <button class="item">
        <div>
            <slot></slot>
        </div>
        <TransitionRoot
            :show="true"
            enter="transition-opacity duration-75"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="notification">5</div>
        </TransitionRoot>
    </button>
</template>

<script setup>
import { TransitionRoot } from '@headlessui/vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
    notification: Boolean
});

if (props.notification) {
    console.log(props.notification)
}

</script>

<style lang="scss">
.item {
    @apply flex justify-between items-center transition-colors duration-100 w-full px-4 py-2.5 rounded-lg text-p14 text-left capitalize hover:text-gray-300 active:text-gray-200 hover:bg-bn-gray-400/5 active:bg-bn-gray-400/10 select-none focus:outline-none focus:ring-2 focus:ring-bn-gray-800;
    div {
        @apply flex space-x-4 items-center;
        svg {
            @apply w-5 h-5;
        }
        span {
            @apply font-semibold;
        }
    }
    .notification {
        @apply bg-primary text-white px-2 py-1 text-xs rounded-md;
    }
}
</style>