import { User } from '../../domain/entities/User';

export interface UserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  delete(id: string): Promise<void>;
}