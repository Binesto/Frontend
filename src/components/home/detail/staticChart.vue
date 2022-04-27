<template>
    <div id="chart" class="absolute bottom-0 right-0 w-full pointer-events-none opacity-30">
        <apexchart width="100%" height="120" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            series: [
                {
                    data: [100, 40, 28, 51, 42, 109, 100],
                },
            ],
            chartOptions: {
                toolbar: {
                    show: false,
                },
                chart: {
                    sparkline: {
                        enabled: true,
                    },
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
                    type: 'area',
                    toolbar: {
                        show: false,
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
                    enabled: true,
                    enabledOnSeries: undefined,
                    followCursor: true,
                    intersect: false,
                    inverseOrder: true,
                    custom: undefined,
                    fillSeriesColor: false,
                    theme: false,
                    style: {
                        fontSize: '12px',
                    },
                    onDatasetHover: {
                        highlightDataSeries: false,
                    },
                    x: {
                        show: false,
                    },
                    y: {
                        show: false,
                    },
                    z: {
                        formatter: undefined,
                        title: 'Size: '
                    },
                    marker: {
                        show: true,
                    },
                },
            },
        };
    },
}
</script>

<style lang="scss" scoped>
</style>