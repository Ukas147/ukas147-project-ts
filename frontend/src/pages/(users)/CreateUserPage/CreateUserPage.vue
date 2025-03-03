<template>
  <div id="createUser">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Cadastrar pessoa">
        <el-input v-model="form.label" placeholder="Digite o nome da pessoa" />
      </el-form-item>
      <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
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
import { reactive, ref } from 'vue'
import { useCreateUserPage } from './useCreateUserPage'

const value = ref('')
const { mensagem, onCreateUser } = useCreateUserPage()

const form = reactive({
  label: '',
})

const handleSubmit = () => {
  onCreateUser(form.label)
}

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>