<template>
    <div class="line-component">
        <div>
            <h3>{{ title }}</h3>
            {{ value }}
        </div>
        <el-button type="danger" :icon="Delete" circle @click="handleDelete" />
    </div>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue';
import { defineEmits, defineProps } from 'vue';

defineProps<{ id: string; value: string; title: string }>();

const emit = defineEmits(["delete"]);

const handleDelete = () => {
    emit("delete");
};
</script>

<style scoped>
.line-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--light-gray);
    max-width: 400px;
}
</style>