<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Dados simulados
const monthDataSeries1 = {
    prices: [8100, 8120, 8150, 8200, 8300, 8350, 8400, 8500, 8600, 8700],
    dates: [
        "2024-03-01", "2024-03-02", "2024-03-03", "2024-03-04", "2024-03-05",
        "2024-03-06", "2024-03-07", "2024-03-08", "2024-03-09", "2024-03-10"
    ]
};

// Série do gráfico
const series = ref([
    {
        name: "STOCK ABC",
        data: monthDataSeries1.prices
    }
]);

// Opções do gráfico
const chartOptions = ref({
    chart: {
        type: "area",
        height: 350,
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "straight"
    },
    title: {
        text: "Fundamental Analysis of Stocks",
        align: "left"
    },
    subtitle: {
        text: "Price Movements",
        align: "left"
    },
    labels: monthDataSeries1.dates,
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: "left"
    }
});
</script>

<style scoped></style>
