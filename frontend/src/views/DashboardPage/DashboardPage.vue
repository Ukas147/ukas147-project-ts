<template>
  <div>
    <h3>Dashboard</h3>
    <div>
      <div style="display: flex">
        <CardComponent title="Gráfico de Barra" :card_content="BarChartComponent" />
        <CardComponent title="Gráfico de Linha" :card_content="LineChartComponent" />
      </div>
      <div style="display: flex">
        <CardComponent title="Gráfico de Área" :card_content="AreaChartComponent" />
        <CardComponent title="Gráfico de Círculo" :card_content="CircularChartComponent" />
        <CardComponent title="Gráfico de Mapa" :card_content="TreemapChartComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CardComponent,
  BarChartComponent,
  LineChartComponent,
  AreaChartComponent,
  CircularChartComponent,
  TreemapChartComponent,
} from "../../components"
</script>

<style scoped>
</style>
