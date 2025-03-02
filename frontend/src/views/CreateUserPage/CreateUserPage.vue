<template>
  <div id="createUser">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
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
import { reactive } from 'vue'
  import { useCreateUserPage } from './useCreateUserPage'

  const { mensagem, addPessoa } = useCreateUserPage()

const form = reactive({
  name: '',
})

const onSubmit = () => {
  addPessoa(form.name)
}
</script>