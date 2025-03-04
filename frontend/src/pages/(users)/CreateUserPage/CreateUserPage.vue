<template>
  <div id="createUser">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Cadastrar pessoa">
        <el-input v-model="form.label" placeholder="Digite o nome da pessoa" />
      </el-form-item>
      <el-select
        v-model="form.departments_id"
        placeholder="Select"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in departments_list"
          :key="item.id"
          :label="item.label"
          :value="item.id"
        />
      </el-select>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <p v-if="mensagem">{{ mensagem }}</p>
  </div>
</template>

<script setup lang="ts">
import { io } from "socket.io-client";
import { reactive, onMounted, onUnmounted, ref } from "vue";
import { createUser } from '../../../service/api/User/createUser';
import { getAllDepartments } from "../../../service/api/Department/getAllDepartments";

interface User {
  label: string;
  departments_id: string
}

const error = ref<string | null>(null);
const socket = io(import.meta.env.VITE_API_URL);
const departments_list = ref<{ id: string; label: string }[]>([]);

const form = reactive({
  label: "",
  departments_id: ""
});

const mensagem = ref('');

const handleSubmit = () => {
  onCreateUser(form);
};

const onCreateUser = async (form: User) => {
  try {
    const result = await createUser(form)
    mensagem.value = result
  } catch (error) {
    mensagem.value = 'Erro ao cadastrar pessoa';
  }
};

onMounted(async () => {
  try {
    departments_list.value = await getAllDepartments();
  } catch (err) {
    error.value = "Erro ao carregar departamentos";
    console.error(err);
  }
  socket.on("department_created", (newDepartment) => {
    console.log("Novo departamento recebido:", newDepartment);
    departments_list.value.push(newDepartment);
  });
});

onUnmounted(() => {
  socket.disconnect();
});
</script>
