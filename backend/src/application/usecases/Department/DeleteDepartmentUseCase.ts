import { DepartmentRepository } from '../../repositories/DepartmentRepository';

export class DeleteDepartmentUseCase {
  constructor(private departmentRepository: DepartmentRepository) { }

  async execute(id: string): Promise<void> {
    return await this.departmentRepository.delete(id);
  }
}