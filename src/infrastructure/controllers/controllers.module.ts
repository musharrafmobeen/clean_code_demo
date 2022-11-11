import { Module } from '@nestjs/common';
import { AddCustomerUseCase } from 'src/usecases/customer/addCustomerUseCase';
import { UseCaseModule } from 'src/usecases/usecase.module';
import { RepositoryModule } from '../repositories/repositories.module';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [UseCaseModule],
  providers: [],
  controllers: [CustomerController],
})
export class ControllersModule {}
