import { Module } from '@nestjs/common';
import { CustomerController } from './infrastructure/controllers/customer/customer.controller';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { UseCaseModule } from './usecases/usecase.module';
import { RepositoryModule } from './infrastructure/repositories/repositories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import db1Entities from './infrastructure/entities/db';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ControllersModule,
    TypeOrmConfigModule,
    UseCaseModule,
    RepositoryModule,
  ],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule {}
