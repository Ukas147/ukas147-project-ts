<template>
    <div>
        <apexchart width="300" height="300" type="donut" :options="options" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Lista de categorias
const categories = ["Categoria A", "Categoria B", "Categoria C", "Categoria D", "Categoria E"];

// Função para gerar um valor aleatório entre min e max
function generateRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gera os dados aleatórios para cada categoria
const randomSeries = categories.map(() => generateRandomValue(10, 100));

const options = ref({
    chart: {
        type: "donut"
    },
    labels: categories,
    legend: {
        position: "bottom"
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: "bottom"
            }
        }
    }]
});

// Dados do gráfico com valores aleatórios
const series = ref(randomSeries);
</script>

<style scoped>
/* Adicione estilos se necessário */
</style>