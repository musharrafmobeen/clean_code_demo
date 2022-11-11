import { UserModel } from 'src/domain/models/user';

export interface IUser {
  createUser(userModel: UserModel): Promise<UserModel>;
  getUser(id: number): Promise<UserModel>;
  getUsers(): Promise<UserModel[]>;
  updateUser(id: number, userModel: UserModel): Promise<UserModel>;
  deleteUser(id: number): Promise<void>;
}
