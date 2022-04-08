<template>
    <div class="main">
        <div class="mstat">
            <div class="space-y-2">
                <span class="font-bold text-bn-gray-400 text-sm">Eth</span>
                <div class="text-2xl font-bold">
                    <span class="text-bn-gray-600">₺</span>54,067.75
                </div>
                <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-red/20 text-bn-red tracking-wide"
                >-%2.17</span>
            </div>
            <div id="chart" class="relative">
                <apexchart height="110" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
        <div class="mdetail">
            <span class="font-bold text-bn-gray-600 text-sm">Detay</span>
            <div class="mt-4 flex relative">
                <div class="-ml-8 flex divide-x divide-bn-gray-900">
                    <div class="flex flex-shrink-0 items-center px-8">
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
                    <div class="flex flex-shrink-0 items-center px-8">
                        <div class="py-2 space-y-2">
                            <span class="font-medium text-bn-gray-400 text-xs">24s Hacim</span>
                            <div class="text-xl font-bold">
                                <span class="text-bn-gray-600">₺</span>54,067.75
                            </div>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bn-red/20 text-bn-red tracking-wide"
                            >-%2.17</span>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-center px-8">
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
                    <div class="flex flex-shrink-0 items-center px-8">
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
                    <div class="h-full absolute top-1/2 transform -translate-y-1/2 right-0">
                        <button
                            class="transition h-full px-4 flex items-center bg-bn-gray-900 hover:bg-bn-gray-800 rounded-lg cursor-pointer z-20 text-gray-300 hover:text-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                        <div class="w-48 right-0 top-0 h-full absolute bg-gradient-to-r from-transparent to-dark-100 -z-10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            series: [
                {
                    data: [31, 40, 28, 51, 42, 109, 100],
                },
            ],
            chartOptions: {

                toolbar: {
                    show: false,
                },
                chart: {
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 8,
                        color: '#8676FF',
                        opacity: 0.1
                    },
                    zoom: {
                        enabled: false,
                    },
                    fontFamily: '"Manrope", sans-serif',
                    height: 350,
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    crosshairs: {
                        show: false,
                    }
                },
                colors: ["#8676FF"],
                yaxis: {
                    show: false,
                },
                grid: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
        };
    },
}
</script>


<style lang="scss" scoped>
.main {
    @apply w-full flex space-x-6;
    .mstat,
    .mdetail {
        @apply bg-dark-100 w-1/2 rounded-3xl p-8 flex relative;
    }
    .mstat {
        @apply justify-between items-center;
    }
    .mdetail {
        @apply flex-col;
    }
}
</style>