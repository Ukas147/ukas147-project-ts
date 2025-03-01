<template>
  <div id="createUser">
    <h1 style="color: var(--dark-gray)">Cadastrar Pessoa</h1>
    <form @submit.prevent="addPessoa">
      <label for="nome">Nome:</label>
      <input type="text" v-model="nome" id="nome" required>
      <button type="submit">Cadastrar</button>
    </form>
    <p v-if="mensagem">{{ mensagem }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useCreateUserPage } from './useCreateUserPage'

  const { nome, mensagem, addPessoa } = useCreateUserPage()
</script>