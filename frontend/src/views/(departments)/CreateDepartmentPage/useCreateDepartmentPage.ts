import { ref } from 'vue';
import { createDepartment } from '../../../service/api/Department/createDepartment'

export const useCreateDepartmentPage = () => {
  const mensagem = ref('');

  const addDepartment = async (department: string) => {
    try {
      const result = await createDepartment(department)
      mensagem.value = result
    } catch (error) {
      mensagem.value = 'Erro ao cadastrar departamento';
    }
  };

  return {
    mensagem,
    addDepartment
  };
}