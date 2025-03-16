<template>
    <div id="chart">
        <apexchart type="treemap" width="300" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Lista de cidades
const cities = [
    "New Delhi", "Kolkata", "Mumbai", "Ahmedabad", "Bangaluru",
    "Pune", "Chennai", "Jaipur", "Surat", "Hyderabad", "Lucknow",
    "Indore", "Kanpur"
];

// Função para gerar um valor aleatório entre min e max
function generateRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gera os dados da série para o treemap, atribuindo um valor aleatório para cada cidade
const seriesData = cities.map(city => ({
    x: city,
    y: generateRandomValue(10, 250)  // ajuste os valores conforme necessário
}));

// Série do gráfico
const series = ref([
    {
        data: seriesData
    }
]);

// Opções do gráfico
const chartOptions = ref({
    legend: {
        show: false
    },
    chart: {
        height: 350,
        type: "treemap"
    },
    title: {
        text: "Basic Treemap"
    }
});
</script>

<style scoped>
/* Adicione estilos se necessário */
</style>