<template>
  <div
    class="sidebar-component"
    @mouseenter="openSidebarComponent"
    @mouseleave="closeSidebarComponent"
    :class="{ open: isOpen }"
  >
    <div style="display: flex; align-items: center">
      <img
        src="../../../public/u.png"
        style="width: 40px; height: 40px; margin: 10px"
      />
      <h3 class="text" style="margin-left: 10px">Ukas147</h3>
    </div>
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/" class="menu-link">
          <v-icon
            style="color: var(--light-gray)"
            name="md-spacedashboard-outlined"
            width="30"
            height="30"
          />
          <span class="text">Dashboard</span>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/users" class="menu-link">
          <v-icon
            style="color: var(--light-gray)"
            name="la-user-solid"
            width="30"
            height="30"
          />
          <span class="text">Usuários</span>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/departments" class="menu-link">
          <v-icon
            style="color: var(--light-gray)"
            name="fa-regular-building"
            width="30"
            height="30"
          />
          <span class="text">Departamento</span>
        </router-link>
      </li>
      <!-- Adicione mais itens conforme necessário -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const openSidebarComponent = () => {
  isOpen.value = true;
};

const closeSidebarComponent = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.sidebar-component {
  position: fixed;
  /* Largura padrão com apenas os ícones */
  transition: width 0.3s ease;
  background-color: var(--dark-gray);
  width: 60px;
  height: 100vh;
  z-index: 1;
}

.sidebar-component.open {
  width: 200px;
  /* Largura expandida exibindo também os textos */
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin: 10px 0
}

.menu-link {
  display: flex;
  align-items: center;
  padding: 15px
}

.menu-item:hover {
  transition: 0.3s ease;
  background-color: var(--opacity-pink);
}

.text {
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.25s ease-out;
  white-space: nowrap;
  color: var(--light-gray);
}

.sidebar-component.open .text {
  opacity: 1;
}
</style>
