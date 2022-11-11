import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseProviders } from './typeorm.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class TypeOrmConfigModule {}
