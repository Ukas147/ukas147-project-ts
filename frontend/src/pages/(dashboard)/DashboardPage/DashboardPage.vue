<template>
  <div>
    <div style="display: flex; align-items: center">
      <div
        style="
        display: flex;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          margin: 10px 10px 10px 0;
          background-color: var(--light-pink);
        "
      >
        <v-icon name="bi-house" width="20" height="20" />
      </div>
      <h3>Dashboard</h3>
    </div>
    <div>
      <div style="display: flex; justify-content: space-between">
        <CardComponent
          title="Data Analítico"
          :card_content="AreaChartComponent"
        />
        <CardComponent
          title="Gráfico de Barra"
          :card_content="BarChartComponent"
        />
        <!-- 
        <CardComponent
          title="Gráfico de Linha"
          :card_content="LineChartComponent"
        /> -->
      </div>
      <!-- <div style="display: flex">
        <CardComponent
          title="Gráfico de Círculo"
          :card_content="CircularChartComponent"
        />
        <CardComponent
          title="Gráfico de Mapa"
          :card_content="TreemapChartComponent"
        />
      </div> -->
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
} from "../../../components";
</script>

<style scoped></style>
