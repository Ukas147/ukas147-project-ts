import { User } from '../../domain/entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class AddUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string): Promise<User> {
    const user = new User(null, name);
    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }
}