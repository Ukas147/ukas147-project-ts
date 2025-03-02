<template>
    <div>
        <div style="display: flex">
            <BarChartComponent />
            <LineChartComponent />
        </div>
        <div style="display: flex">
            <AreaChartComponent />
            <CircularChartComponent />
            <TreemapChartComponent />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    BarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    CircularChartComponent,
    TreemapChartComponent
} from "../../components";
</script>

<style scoped>
</style>
