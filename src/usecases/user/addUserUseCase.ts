import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@Injectable()
export class AddUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async addUser(user: UserModel) {
    console.log(user);
    return await this.userRepository.createUser(user);
  }
}
