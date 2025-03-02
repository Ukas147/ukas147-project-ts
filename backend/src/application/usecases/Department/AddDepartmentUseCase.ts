import { Department } from '../../../domain/entities/Department';
import { DepartmentRepository } from '../../repositories/DepartmentRepository';

export class AddDepartmentUseCase {
  constructor(private userRepository: DepartmentRepository) {}

  async execute(name: string): Promise<Department> {
    const user = new Department(null, name);
    const createdDepartment = await this.userRepository.create(user);
    return createdDepartment;
  }
}