<template>
    <div>
        <h1>Lista de Usuários</h1>

        <!-- Exibir mensagem de erro, se houver -->
        <p v-if="error" class="error">{{ error }}</p>

        <!-- Lista de usuários -->
        <ul v-else>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { getAllUsers } from "../../service/api/User/getAllUsers";
import { io } from "socket.io-client";

// URL do WebSocket (deve ser a mesma do backend)
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

    // Escutando o evento "user_added" via WebSocket
    socket.on("user_added", (newUser) => {
        console.log("Novo usuário recebido:", newUser);
        users.value.push(newUser); // Atualiza a lista dinamicamente
    });
});

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