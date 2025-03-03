import { v4 as uuidv4 } from 'uuid';
import { Department } from '../../../domain/entities/Department';
import { DepartmentRepository } from '../../repositories/DepartmentRepository';

export class AddDepartmentUseCase {
  constructor(private departmentRepository: DepartmentRepository) { }

  async execute(label: string): Promise<Department> {
    const UUID = uuidv4()
    const department = new Department(UUID, label);
    const createdDepartment = await this.departmentRepository.create(department);
    return createdDepartment;
  }
}