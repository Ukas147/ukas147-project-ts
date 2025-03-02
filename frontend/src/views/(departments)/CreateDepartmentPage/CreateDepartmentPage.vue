<template>
  <div id="createDepartmentPage">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Cadastrar departamento">
        <el-input v-model="form.name" placeholder="Digite o nome do departamento" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <p v-if="mensagem">{{ mensagem }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";
import { useCreateDepartmentPage } from "./useCreateDepartmentPage";

const value = ref("");
const { mensagem, addDepartment } = useCreateDepartmentPage();

const form = reactive({
  department: "",
});

const onSubmit = () => {
  addDepartment(form.department);
};
</script>
