<template>
    <div id="chart">
        <apexchart type="treemap" width="300" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Dados do gráfico
const series = ref([
    {
        data: [
            { x: "New Delhi", y: 218 },
            { x: "Kolkata", y: 149 },
            { x: "Mumbai", y: 184 },
            { x: "Ahmedabad", y: 55 },
            { x: "Bangaluru", y: 84 },
            { x: "Pune", y: 31 },
            { x: "Chennai", y: 70 },
            { x: "Jaipur", y: 30 },
            { x: "Surat", y: 44 },
            { x: "Hyderabad", y: 68 },
            { x: "Lucknow", y: 28 },
            { x: "Indore", y: 19 },
            { x: "Kanpur", y: 29 }
        ]
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

<style scoped></style>