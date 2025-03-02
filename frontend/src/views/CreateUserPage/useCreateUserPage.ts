import { ref } from 'vue';
import { createUser } from '../../service/api/User/createUser'

export const useCreateUserPage = () => {
  const mensagem = ref('');

  const addPessoa = async (name: string) => {
    try {
      const result = await createUser(name)
      mensagem.value = result
    } catch (error) {
      mensagem.value = 'Erro ao cadastrar pessoa';
    }
  };

  return {
    mensagem,
    addPessoa
  };
}