import { ref } from 'vue';
import { createUser } from '../../service/User/createUser'

export const useCreateUserPage = () => {
  const nome = ref('');
  const mensagem = ref('');

  const addPessoa = async () => {
    try {
      const result = await createUser(nome.value)
      mensagem.value = result
    } catch (error) {
      mensagem.value = 'Erro ao cadastrar pessoa';
    }
  };

  return {
    nome,
    mensagem,
    addPessoa
  };
}