<template>
  <div id="createDepartmentPage">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Cadastrar departamento">
        <el-input v-model="form.label" placeholder="Digite o nome do departamento" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <p v-if="mensagem">{{ mensagem }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useCreateDepartmentPage } from "./useCreateDepartmentPage";

const value = ref("");
const { mensagem, onCreateDepartment } = useCreateDepartmentPage();

const form = reactive({
  label: "",
});

const handleSubmit = () => {
  onCreateDepartment(form.label);
};
</script>
