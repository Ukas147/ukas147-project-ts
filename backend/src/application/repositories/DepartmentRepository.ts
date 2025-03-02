import { Department } from '../../domain/entities/Department';

export interface DepartmentRepository {
  create(department: Department): Promise<Department>;
  findAll(): Promise<Department[]>;
  delete(id: number): Promise<void>;
}