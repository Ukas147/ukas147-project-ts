import { DepartmentRepository } from '../../repositories/DepartmentRepository';

export class DeleteDepartmentUseCase {
  constructor(private userRepository: DepartmentRepository) {}

  async execute(id: number): Promise<void> {
    return await this.userRepository.delete(id);
  }
}