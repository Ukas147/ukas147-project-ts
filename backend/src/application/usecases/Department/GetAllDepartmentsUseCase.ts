import { Department } from '../../../domain/entities/Department';
import { DepartmentRepository } from '../../repositories/DepartmentRepository';

export class GetAllDepartmentsUseCase {
  constructor(private userRepository: DepartmentRepository) {}

  async execute(): Promise<Department[]> {
    return await this.userRepository.findAll();
  }
}