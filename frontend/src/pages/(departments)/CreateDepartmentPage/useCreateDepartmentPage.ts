import { ref } from 'vue';
import { createDepartment } from '../../../service/api/Department/createDepartment';

export const useCreateDepartmentPage = () => {
  const mensagem = ref('');

  const onCreateDepartment = async (label: string) => {
    try {
      const result = await createDepartment(label)
      mensagem.value = result
    } catch (error) {
      mensagem.value = 'Erro ao cadastrar departamento';
    }
  };

  return {
    mensagem,
    onCreateDepartment
  };
}