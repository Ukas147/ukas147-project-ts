<template>
    <div id="chart">
        <apexchart type="area" width="900" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Função para gerar preços com variação aleatória
function generateRandomPrices(initial: number, days: number): number[] {
    const prices: number[] = [];
    let currentPrice = initial;
    for (let i = 0; i < days; i++) {
        // Gera uma variação entre -50 e +50 (pode ajustar conforme necessário)
        const variation = Math.round((Math.random() - 0.5) * 100);
        currentPrice += variation;
        prices.push(currentPrice);
    }
    return prices;
}

// Função para gerar uma sequência de datas a partir de uma data inicial
function generateDates(start: string, days: number): string[] {
    const dates: string[] = [];
    let currentDate = new Date(start);
    for (let i = 0; i < days; i++) {
        dates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

const days = 10;
const monthDataSeries1 = {
    prices: generateRandomPrices(8100, days),
    dates: generateDates("2024-03-01", days)
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

<style scoped>
/* Seu estilo, se necessário */
</style>