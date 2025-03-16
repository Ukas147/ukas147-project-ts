<template>
    <div>
        <apexchart width="400" height="300" type="bar" :options="options" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Função para gerar dados aleatórios para o gráfico de barras
function generateRandomBarData(num: number, min: number, max: number): number[] {
    const data: number[] = [];
    for (let i = 0; i < num; i++) {
        // Gera um valor inteiro entre min e max
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        data.push(value);
    }
    return data;
}

// Configura as opções do gráfico (as categorias, por exemplo, os anos)
const options = ref({
    chart: {
        id: "vuechart-example"
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
});

// Gera dados aleatórios para 8 anos, com valores entre 20 e 100
const randomData = generateRandomBarData(8, 20, 100);

// Define a série do gráfico utilizando os dados gerados
const series = ref([
    {
        name: "series-1",
        data: randomData
    }
]);
</script>

<style scoped>
/* Adicione seu estilo, se necessário */
</style>