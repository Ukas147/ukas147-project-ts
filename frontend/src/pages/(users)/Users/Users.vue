<template>
  <div>
    <div style="display: flex; align-items: center">
      <div
        style="
          display: flex;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          margin: 10px 10px 10px 0;
          background-color: var(--light-pink);
        "
      >
        <v-icon name="la-user-solid" width="20" height="20" />
      </div>
      <h3>Lista de Usuários</h3>
    </div>

    <el-button type="danger" round @click="handleCreateUser"
      >Cadastrar novo usuário</el-button
    >

    <p v-if="error" class="error">{{ error }}</p>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        <LineComponent
          :value="user.username"
          :id="user.id"
          @delete="handleDelete(user.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { getAllUsers } from "../../../service/api/User/getAllUsers";
import { deleteUser } from "../../../service/api/User/deleteUser";
import { io } from "socket.io-client";
import { LineComponent } from "../../../components";

const socket = io(import.meta.env.VITE_API_URL);
const router = useRouter();
const users = ref<{ id: number; username: string }[]>([]);
const error = ref<string | null>(null);

// Buscar usuários ao montar o componente
onMounted(async () => {
  try {
    users.value = await getAllUsers();
  } catch (err) {
    error.value = "Erro ao carregar usuários";
    console.error(err);
  }
  socket.on("user_added", (newUser) => {
    console.log("Novo usuário recebido:", newUser);
    users.value.push(newUser);
  });

  socket.on("user_deleted", (deletedUser) => {
    users.value = users.value.filter((user) => user.id !== deletedUser.id);
  });
});

// Função para deletar usuário
const handleDelete = async (id: number) => {
  try {
    await deleteUser(id);
    users.value = users.value.filter((user) => user.id !== id); // Remove da lista manualmente
  } catch (err) {
    console.error("Erro ao excluir usuário:", err);
  }
};

const handleCreateUser = () => {
  router.push("/create-user");
};

// Desconectar ao desmontar o componente
onUnmounted(() => {
  socket.disconnect();
});
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
