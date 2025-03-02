<template>
    <div>
        <apexchart width="300" height="300" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Função para gerar dados aleatórios para o gráfico de linha
function generateRandomLineData(num: number, min: number, max: number): number[] {
    const data: number[] = [];
    for (let i = 0; i < num; i++) {
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        data.push(value);
    }
    return data;
}

// Categorias do eixo X
const categories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998];

const options = ref({
    chart: {
        id: "vuechart-example"
    },
    xaxis: {
        categories: categories
    }
});

// Gera dados aleatórios para a série com base no número de categorias
const randomData = generateRandomLineData(categories.length, 20, 100);

const series = ref([
    {
        name: "series-1",
        data: randomData
    }
]);
</script>

<style scoped>
/* Adicione estilos, se necessário */
</style>