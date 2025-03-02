<template>
    <el-card shadow="hover">
        <template #header>
            <h4>
                {{ title }}
            </h4>
        </template>
        <div>
            <component :is="card_content" />
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
    title: string;
    card_content: any;
}>();
</script>

<style scoped>
</style>