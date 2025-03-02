import { Department } from '../../../domain/entities/Department';
import { DepartmentRepository } from '../../repositories/DepartmentRepository';

export class AddDepartmentUseCase {
  constructor(private departmentRepository: DepartmentRepository) {}

  async execute(department: string): Promise<Department> {
    const varDepartment = new Department(null, department);
    const createdDepartment = await this.departmentRepository.create(varDepartment);
    return createdDepartment;
  }
}