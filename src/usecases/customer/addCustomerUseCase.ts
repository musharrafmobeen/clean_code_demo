import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import {
  CustomerModel,
  CustomerModelWithUserID,
} from 'src/domain/models/customer';
import { UserModel } from 'src/domain/models/user';
import { CustomerRepository } from 'src/infrastructure/repositories/customer.repository';
import { AddUserUseCase } from '../user/addUserUseCase';
import { DataSource } from 'typeorm';
import { Customer } from 'src/infrastructure/entities/customer.entity';

@Injectable()
export class AddCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly addUserUseCase: AddUserUseCase, // @InjectDataSource('DATABASE_TWO_CONNECTION') // private dataSource2: DataSource,
  ) {}

  async createCustomer(
    customer: CustomerModel,
  ): Promise<CustomerModelWithUserID> {
    const entityManager = this.customerRepository.getEntityManager();

    let returnData;

    await entityManager.transaction(async (transactionalEntityManager) => {
      const customerEntityInstance = new Customer();
      customerEntityInstance.name = customer.name;
      customerEntityInstance.email = customer.email;
      customerEntityInstance.phone_no = customer.phone_no;
      const createdCustomer = await transactionalEntityManager.save(
        customerEntityInstance,
      );
      const user = new UserModel();
      user.username = 'sdasdasd';
      user.password = 'dasda';
      user.customer = createdCustomer.id;
      const createdUser = await this.addUserUseCase.addUser(user);
      returnData = {
        ...createdCustomer,
        userID: createdUser.id,
      };
    });

    return returnData;
    // // const queryRunner2 = this.dataSource2.createQueryRunner();

    // await queryRunner.startTransaction();

    // try {
    //   const createdCustomer = await queryRunner.manager.save(customer);
    //   const user = new UserModel();
    //   user.username = 'sdasdasd';
    //   user.password = 'dasda';
    //   user.customer = createdCustomer.id;
    //   const createdUser = await queryRunner.manager.save(user);

    //   await queryRunner.commitTransaction();

    //   return { ...createdCustomer, userID: createdUser.id };
    // } catch (error) {
    //   await queryRunner.rollbackTransaction();
    // } finally {
    //   await queryRunner.release();
    // }

    // const createdCustomer = await this.customerRepository.createCustomer(
    //   customer,
    // );
    // if (createdCustomer) {
    //   const user = new UserModel();
    //   user.username = 'sdasdasd';
    //   user.password = 'dasda';
    //   user.customer = createdCustomer.id;
    //   const createdUser = await this.addUserUseCase.addUser(user);

    //   return {
    //     ...createdCustomer,
    //     userID: createdUser.id,
    //   };
    // }
  }
}
