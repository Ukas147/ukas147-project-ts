import { ref } from 'vue';
import { createUser } from '../../../service/api/User/createUser';

export const useCreateUserPage = () => {
  const mensagem = ref('');

  const onCreateUser = async (label: string) => {
    try {
      const result = await createUser(label)
      mensagem.value = result
    } catch (error) {
      mensagem.value = 'Erro ao cadastrar pessoa';
    }
  };

  return {
    mensagem,
    onCreateUser
  };
}