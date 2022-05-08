<template>
    <TransitionRoot :show="stateStore.getSearch" as="template" @after-leave="query = ''">
        <Dialog
            as="div"
            class="fixed inset-0 z-20 overflow-y-auto p-4 sm:p-6 md:p-20"
            @close="stateStore.setSearch">
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25 transition-opacity backdrop-blur-sm" />
            </TransitionChild>

            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
                <Combobox
                    as="div"
                    class="mx-auto max-w-3xl transform divide-y divide-dark-100 overflow-hidden rounded-xl bg-dark-200 shadow-2xl ring-2 ring-primary/30 transition-all"
                    v-slot="{ activeOption }"
                    @update:modelValue="onSelect"
                >
                    <div class="relative">
                        <SearchIcon
                            class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        <ComboboxInput
                            class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-400 focus:ring-0 sm:text-sm focus:outline-none focus:bg-black/10"
                            placeholder="Ara..."
                            @change="query = $event.target.value"
                        />
                    </div>

                    <ComboboxOptions
                        v-if="query === '' || filteredCoin.length > 0"
                        class="flex divide-x divide-dark-100"
                        as="div"
                        static
                        hold
                    >
                        <div
                            :class="['max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4', activeOption && 'sm:h-96']"
                        >
                            <h2
                                v-if="query === ''"
                                class="mt-2 mb-4 text-xs font-semibold text-gray-500 select-none"
                            >Popüler Aramalar</h2>
                            <div hold class="-mx-2 text-sm text-gray-500">
                                <ComboboxOption
                                    v-for="unit in query === '' ? recent : filteredCoin"
                                    :key="unit.id"
                                    :value="unit"
                                    as="template"
                                    v-slot="{ active }"
                                >
                                    <div
                                        :class="['group flex justify-between select-none items-center rounded-md p-2 cursor-pointer', active && 'bg-black/10 text-white']"
                                    >
                                        <div class="flex justify-center items-center">
                                            <svg
                                                class="w-5 h-5"
                                                :viewBox="unit.viewbox"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path :d="unit.path" :fill="unit.color" />
                                            </svg>
                                            <div class="flex justify-start items-center space-x-2">
                                                <span class="ml-3 truncate">{{ unit.name }}</span>
                                                <span
                                                    class="ml-3 text-xs font-bold opacity-40"
                                                >{{ unit.currency }}</span>
                                            </div>
                                        </div>

                                        <ChevronRightIcon
                                            v-if="active"
                                            class="ml-3 h-4 w-4 flex-none text-bn-gray-600"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </ComboboxOption>
                            </div>
                        </div>

                        <div
                            v-if="activeOption"
                            class="hidden h-96 w-1/2 flex-none flex-col divide-y divide-dark-100 overflow-y-auto sm:flex"
                        >
                            <div class="flex-none p-6 flex justify-center flex-col items-center relative overflow-hidden">
                                <svg
                                    class="h-48 w-48 -z-10 absolute -top-5 -right-10 -rotate-12 text-white/5"
                                    :viewBox="activeOption.viewbox"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path :d="activeOption.path" fill="currentColor" />
                                </svg>
                                <svg
                                    class="h-16 w-16"
                                    :viewBox="activeOption.viewbox"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path :d="activeOption.path" :fill="activeOption.color" />
                                </svg>
                                <div class="mt-2">
                                    <span
                                        class="mt-3 font-semibold text-gray-200"
                                    >{{ activeOption.name }}</span>
                                    <span
                                        class="text-xs font-bold ml-2 leading-6 text-gray-500"
                                    >{{ activeOption.currency }}</span>
                                </div>
                            </div>
                            <div class="flex flex-auto flex-col justify-between p-6">
                                <dl class="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-400">
                                    <dt class="col-end-1 font-semibold text-gray-200">Fiyat</dt>
                                    <dd class="font-medium flex items-center">{{ activeOption.price }} <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="activeOption.average.status ? 'bg-bn-green/20 text-bn-green' : 'bg-bn-red/20 text-bn-red'"> %{{ activeOption.average.percent }} </span></dd>
                                    <dt class="col-end-1 font-semibold text-gray-200">Hacim</dt>
                                    <dd class="font-medium">{{ activeOption.volume }}</dd>
                                </dl>
                                <router-link :to="activeOption.url">
                                    <button class="mt-6 w-full rounded-md border border-transparent bg-bn-green/5 py-2 px-4 text-xs font-bold text-bn-green/70 hover:text-bn-green hover:bg-bn-green/10 focus:outline-none focus:ring-2 focus:ring-bn-green/10 hover:focus:ring-bn-green/20">Al / Sat</button>
                                </router-link>
                            </div>
                        </div>
                    </ComboboxOptions>

                    <div
                        v-if="query !== '' && filteredCoin.length === 0"
                        class="py-14 px-6 text-center text-sm sm:px-14"
                    >
                        <svg
                            class="mx-auto h-14 w-14 text-gray-400"
                            viewBox="0 0 197 248"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M174.825 130.239C174.276 129.752 173.727 129.277 173.179 128.814C171.595 127.562 169.953 126.37 168.257 125.246C162.723 121.578 161.955 110.332 166.817 105.811V105.811C169.22 103.505 171.624 100.858 173.835 97.797C179.425 90.0561 183.781 79.6707 183.781 65.4686C183.781 30.0802 153.74 0 104.261 0H17.6713C7.91171 0 0 7.92197 0 17.6942V191.886L26.5068 182.539V26.5414H104.261C142.658 26.5414 157.274 48.0632 157.274 65.4686C157.274 71.4125 156.042 75.5121 154.613 78.4715C153.161 81.4817 151.128 84.0789 148.627 86.5043C145.544 89.342 142.567 91.2281 140.113 92.2397C129.703 96.532 123.136 106.941 123.737 118.198C124.318 129.076 131.468 138.452 141.7 141.92L174.825 130.239Z"
                                fill="currentColor"
                            />
                            <path
                                d="M5.63037 206.074C16.2101 230.574 40.5646 247.72 68.918 247.72H111.329C163.99 247.72 196.151 215.515 196.151 176.942C196.151 162.261 191.81 151.137 185.857 142.523L159.197 151.924C161.845 154.522 164.042 157.266 165.716 160.294C167.896 164.234 169.644 169.46 169.644 176.942C169.644 197.749 152.661 221.178 111.329 221.178H68.918C52.1218 221.178 37.606 211.401 30.737 197.222L5.63037 206.074Z"
                                fill="currentColor"
                            />
                            <path
                                d="M124.127 74.4597L131.492 67.081L135.69 71.2889C136.529 72.1281 137 73.2659 137 74.4522C137 75.6386 136.529 76.7764 135.69 77.6155L134.653 78.6527C134.238 79.0692 133.745 79.3996 133.203 79.6251C132.66 79.8506 132.078 79.9667 131.49 79.9667C130.902 79.9667 130.32 79.8506 129.777 79.6251C129.235 79.3996 128.742 79.0692 128.327 78.6527L124.127 74.4597ZM135.68 52.3469L134.638 51.3097C133.799 50.4711 132.661 50 131.475 50C130.289 50 129.151 50.4711 128.312 51.3097L122 57.6363L115.673 51.3097C114.834 50.4711 113.696 50 112.51 50C111.324 50 110.186 50.4711 109.347 51.3097L108.31 52.3469C107.471 53.1861 107 54.3239 107 55.5102C107 56.6966 107.471 57.8344 108.31 58.6735L114.636 65L108.31 71.3265C107.471 72.1656 107 73.3034 107 74.4898C107 75.6761 107.471 76.8139 108.31 77.6531L109.347 78.6903C110.186 79.5289 111.324 80 112.51 80C113.696 80 114.834 79.5289 115.673 78.6903L135.69 58.6725C136.529 57.8334 137 56.6956 137 55.5093C137 54.3229 136.529 53.1851 135.69 52.346L135.68 52.3469Z"
                                fill="currentColor"
                            />
                        </svg>

                        <p class="mt-4 font-semibold text-gray-200">Bulunamadı...</p>
                        <p
                            class="mt-2 text-gray-400 flex justify-center flex-wrap text-xs leading-relaxed"
                        >
                            <b class="flex">
                                "
                                <div class="max-w-sm truncate text-gray-200">{{ query }}</div>"
                            </b> &nbsp; ile ilgili hiçbir şey bulamadık. Lütfen daha sonra tekrar deneyin.
                        </p>
                    </div>
                </Combobox>
            </TransitionChild>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { SearchIcon } from '@heroicons/vue/solid'
import { ChevronRightIcon, UsersIcon } from '@heroicons/vue/outline'
import { useStateStore } from '@/stores/store.js'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

const Coin = [
    {
        id: 1,
        path: `M35.2465 174.269V193.212C35.2465 195.303 37.0026 197 39.1663 197H54.8454C55.885 197 56.882 196.601 57.6171 195.89C58.3522 195.18 58.7651 194.216 58.7651 193.212V174.269H66.6047V193.212C66.6047 195.303 68.3607 197 70.5244 197H86.2035C87.2431 197 88.2401 196.601 88.9752 195.89C89.7103 195.18 90.1233 194.216 90.1233 193.212V174.269H91.4403C122.673 174.269 145 158.615 145 131.535C145 108.774 129.211 96.333 110.726 94.56V93.2265C125.934 89.5592 137.113 78.4666 137.113 60.0395C137.113 36.8238 119.083 22.7308 91.5657 22.7308H90.1233V3.78846C90.1233 2.7837 89.7103 1.82009 88.9752 1.10962C88.2401 0.399141 87.2431 0 86.2035 0H70.5244C69.4849 0 68.4878 0.399141 67.7527 1.10962C67.0176 1.82009 66.6047 2.7837 66.6047 3.78846V22.7308H57.6206V3.78846C57.6206 2.7837 57.2076 1.82009 56.4725 1.10962C55.7374 0.399141 54.7404 0 53.7008 0H39.1663C38.1267 0 37.1297 0.399141 36.3946 1.10962C35.6595 1.82009 35.2465 2.7837 35.2465 3.78846V22.7308L3.91977 22.8975C2.88018 22.8975 1.88317 23.2966 1.14807 24.0071C0.412971 24.7176 0 25.6812 0 26.6859V41.6731C0 43.7492 1.7247 45.4615 3.88841 45.4615L15.7261 45.3858C18.8313 45.4058 21.8022 46.612 23.9905 48.7413C26.1789 50.8705 27.4071 53.7499 27.407 56.7512V140.173C27.407 143.187 26.1681 146.078 23.9628 148.21C21.7575 150.341 18.7665 151.538 15.6477 151.538L3.91977 151.705C2.88018 151.705 1.88317 152.104 1.14807 152.815C0.412971 153.525 0 154.489 0 155.494V170.647C0 172.739 1.75606 174.436 3.91977 174.436L35.2465 174.269ZM57.6206 45.2645H84.5729C98.7781 45.2645 107.119 52.8112 107.119 65.1464C107.119 78.3454 98.1039 85.7859 77.6898 85.7859H57.6206V45.2645ZM57.6206 106.653H86.4701C104.297 106.653 114.002 115.442 114.002 129.747C114.002 144.189 104.187 151.72 80.1671 151.72H57.6206V106.668V106.653Z`,
        color: '#F4951F',
        viewbox: '0 0 145 197',
        name: 'Bitcoin',
        currency: 'BTC',
        price: '₺699,757.95',
        volume: '₺475,396,582,908',
        average: {
            percent: '1.88',
            status: true,
        },
        url: '/markets/btc',
    },
    {
        id: 2,
        path: `M5.64848 14.3756L0 11.0422L5.64503 19L11.2964 11.0422L5.64503 14.3756H5.64848ZM5.64848 0L0.00229994 9.37119L5.64848 12.7104L11.297 9.37464L5.64848 0Z`,
        color: 'white',
        viewbox: '0 0 12 19',
        name: 'Etherium',
        currency: 'ETH',
        price: '₺50,513.16',
        volume: '₺298,424,106,058',
        average: {
            percent: '2.17',
            status: false,
        },
        url: '/markets/eth',
    },
    // More Coin...
]
const recent = [Coin[0], Coin[1]]

export default {
    components: {
        ChevronRightIcon,
        Combobox,
        ComboboxInput,
        ComboboxOptions,
        ComboboxOption,
        Dialog,
        DialogOverlay,
        SearchIcon,
        TransitionChild,
        TransitionRoot,
        UsersIcon,
    },
    setup() {
        const stateStore = useStateStore();
        const router = useRouter();
        const query = ref('')
        const filteredCoin = computed(() =>
            query.value === ''
                ? []
                : Coin.filter((unit) => {
                    return unit.name.toLowerCase().includes(query.value.toLowerCase())
                }) && Coin.filter((unit) => {
                    return unit.currency.toLowerCase().includes(query.value.toLowerCase())
                })
        )
        return {
            stateStore,
            query,
            recent,
            filteredCoin,
            onSelect(unit) {
                router.push(unit.url)
            },
        }
    },
}
</script>