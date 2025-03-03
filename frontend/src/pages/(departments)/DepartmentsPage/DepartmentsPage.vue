<template>
  <div>
    <div style="display: flex; align-items: center">
      <div style="
          display: flex;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          margin: 10px 10px 10px 0;
          background-color: var(--light-pink);
        ">
        <v-icon name="fa-regular-building" width="20" height="20" />
      </div>
      <h3>Departamentos</h3>
    </div>

    <el-button type="danger" round @click="handleCreateDepartment">
      Cadastrar Departamento
    </el-button>

    <p v-if="error" class="error">{{ error }}</p>

    <ul v-else>
      <li v-for="department in departments" :key="department.id">
        <LineComponent title="Departamento" :value="department.label" :id="department.id" @delete="handleDelete(department.id)" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { io } from "socket.io-client";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { LineComponent } from "../../../components";
import { deleteDepartment } from "../../../service/api/Department/deleteDepartment";
import { getAllDepartments } from "../../../service/api/Department/getAllDepartments";
const socket = io(import.meta.env.VITE_API_URL);
const router = useRouter();
const error = ref<string | null>(null);
const departments = ref<{ id: string; label: string }[]>([]);
const handleCreateDepartment = () => {
  router.push("/create-department");
};

onMounted(async () => {
  try {
    departments.value = await getAllDepartments();
  } catch (err) {
    error.value = "Erro ao carregar departamentos";
    console.error(err);
  }
  socket.on("department_created", (newDepartment) => {
    console.log("Novo departamento recebido:", newDepartment);
    departments.value.push(newDepartment);
  });

  socket.on("department_deleted", (deletedDepartment) => {
    departments.value = departments.value.filter(
      (department) => department.id !== deletedDepartment.id
    );
  });
});

const handleDelete = async (id: string) => {
  try {
    await deleteDepartment(id);
    departments.value = departments.value.filter(
      (department) => department.id !== id
    );
  } catch (err) {
    console.error("Erro ao excluir departamento:", err);
  }
};

onUnmounted(() => {
  socket.disconnect();
});
</script>
