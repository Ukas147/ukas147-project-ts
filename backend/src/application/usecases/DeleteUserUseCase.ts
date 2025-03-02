import { UserRepository } from '../repositories/UserRepository';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<void> {
    return await this.userRepository.delete(id);
  }
}