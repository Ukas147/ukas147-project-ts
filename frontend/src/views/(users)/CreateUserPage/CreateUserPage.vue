<template>
  <div id="createUser">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Cadastrar pessoa">
        <el-input v-model="form.name" placeholder="Digite o nome da pessoa" />
      </el-form-item>
      <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
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
import { ref } from 'vue'
import { useCreateUserPage } from './useCreateUserPage'

const value = ref('')
const { mensagem, addPessoa } = useCreateUserPage()

const form = reactive({
  name: '',
})

const onSubmit = () => {
  addPessoa(form.name)
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