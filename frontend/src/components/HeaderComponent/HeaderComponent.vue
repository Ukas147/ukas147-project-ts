<template>
  <div class="dashboard-component">
    <SearchComponent />
    <div style="display: flex; align-items: center; gap: 20px; padding-right: 20px">
      <Bell width="20" height="20" />
      <div style="display: flex; align-items: center; gap: 5px">
        <v-icon name="la-user-circle" width="30" height="30" />
        <p>Lucas Kenzo</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchComponent } from "../../components";
</script>

<style>
.dashboard-component {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 60px);
  background-color: var(--opacity-pink);
  padding: 5px 10px;
  overflow: hidden
}
</style>
