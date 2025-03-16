<template>
  <el-input
    v-model="input"
    style="width: 240px"
    placeholder="Please Input"
    :suffix-icon="Search"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const input = ref("");
</script>

<style></style>
