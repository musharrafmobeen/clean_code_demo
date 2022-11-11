import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { CustomerRepository } from './customer.repository';
import { UserRepository } from './user.repository';
import db1Entities from '../entities/db';
import { Customer } from '../entities/customer.entity';
import { customerProviders } from './customer.provider';
import { userProviders } from './user.provider';

@Module({
  imports: [TypeOrmConfigModule],
  providers: [
    CustomerRepository,
    ...customerProviders,
    UserRepository,
    ...userProviders,
  ],
  exports: [
    CustomerRepository,
    ...customerProviders,
    UserRepository,
    ...userProviders,
  ],
})
export class RepositoryModule {}
