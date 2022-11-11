import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from 'src/infrastructure/config/typeorm/typeorm.module';
import { CustomerRepository } from 'src/infrastructure/repositories/customer.repository';
import { RepositoryModule } from 'src/infrastructure/repositories/repositories.module';
import { UserModule } from '../user/user.module';
import { AddCustomerUseCase } from './addCustomerUseCase';

@Module({
  imports: [RepositoryModule, UserModule],
  providers: [AddCustomerUseCase],
  exports: [AddCustomerUseCase],
})
export class CustomerModule {}
