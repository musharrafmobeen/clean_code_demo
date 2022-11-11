import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infrastructure/repositories/repositories.module';

import { AddUserUseCase } from './addUserUseCase';

@Module({
  imports: [RepositoryModule],
  providers: [AddUserUseCase],
  exports: [AddUserUseCase],
})
export class UserModule {}
