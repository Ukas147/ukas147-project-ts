import { v4 as uuidv4 } from 'uuid';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../repositories/UserRepository';

export class AddUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(label: string, departments_id: string): Promise<User> {
    const UUID = uuidv4()
    const user = new User(UUID, label, departments_id);
    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }
}