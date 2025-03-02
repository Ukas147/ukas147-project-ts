<template>
    <div>
        <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

const options = ref({
    chart: {
        id: "vuechart-example"
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
});

// Dados do gráfico
const series = ref([
    {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
]);
</script>