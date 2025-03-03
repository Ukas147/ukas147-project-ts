<template>
  <div id="app">
    <SidebarComponent />
    <div style="width: 100%; margin-left: 60px">
      <HeaderComponent />
      <router-view class="router-view" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HeaderComponent, SidebarComponent } from './components';
const input = ref('')
</script>
<style scoped>
#app {
  display: flex;
}

nav {
  margin-bottom: 20px;
}

router-link {
  margin-right: 10px;
}

.router-view {
  height: calc(100vh - 70px);
  margin: 40px 10px 10px 10px;
  padding: 12px
}
</style>