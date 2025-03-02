<template>
    <div>
        <h1>Lista de Usuários</h1>

        <p v-if="error" class="error">{{ error }}</p>

        <ul v-else>
            <li v-for="user in users" :key="user.id">
                <LineComponent :value="user.name" :id="user.id" @delete="handleDelete(user.id)" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { getAllUsers } from "../../service/api/User/getAllUsers";
import { deleteUser } from "../../service/api/User/deleteUser";
import { io } from "socket.io-client";
import { LineComponent } from "../../components";

const socket = io(import.meta.env.VITE_API_URL);

const users = ref<{ id: number; name: string }[]>([]);
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
        users.value = users.value.filter(user => user.id !== deletedUser.id);
    });
});

// Função para deletar usuário
const handleDelete = async (id: number) => {
    try {
        await deleteUser(id);
        users.value = users.value.filter(user => user.id !== id); // Remove da lista manualmente
    } catch (err) {
        console.error("Erro ao excluir usuário:", err);
    }
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