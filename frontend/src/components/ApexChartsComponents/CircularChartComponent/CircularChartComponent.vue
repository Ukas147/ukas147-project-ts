<template>
    <div>
        <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Opções do gráfico
const options = ref({
    chart: {
        type: "donut"
    },
    labels: ["Categoria A", "Categoria B", "Categoria C", "Categoria D", "Categoria E"],
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

// Dados do gráfico
const series = ref([44, 55, 41, 17, 15]);
</script>
