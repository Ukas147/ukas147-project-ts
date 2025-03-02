<template>
  <div id="app">
    <SidebarComponent />
    <div style="width: 100%; margin-left: 60px">
      <HeaderComponent />
      <router-view style="margin: 10px 0px 10px 20px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SidebarComponent, HeaderComponent } from './components'
import { ref } from 'vue'
const input = ref('')
</script>
<style>
#app {
  display: flex;
}

nav {
  margin-bottom: 20px;
}

router-link {
  margin-right: 10px;
}
</style>