import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/domain/models/user';
import { IUser } from 'src/domain/repositories/user.repository.interface';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}
  createUser(userModel: UserModel): Promise<UserModel> {
    return this.userRepository.save(userModel);
  }
  getUser(id: number): Promise<UserModel> {
    return this.userRepository.findOne({ where: { id } });
  }
  getUsers(): Promise<UserModel[]> {
    return this.userRepository.find();
  }
  async updateUser(id: number, userModel: UserModel): Promise<UserModel> {
    let user = await this.userRepository.findOne({ where: { id } });

    if (user) {
      user = { ...user, ...userModel };
      return this.userRepository.save(user);
    }

    throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
  }
  deleteUser(id: number): Promise<void> {
    this.userRepository.delete(id);
    return;
  }
}
