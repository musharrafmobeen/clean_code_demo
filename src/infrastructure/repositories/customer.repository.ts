import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerModel } from 'src/domain/models/customer';
import { ICustomer } from 'src/domain/repositories/customer.repository.interface';
import { Customer } from 'src/infrastructure/entities/customer.entity';
import { Repository } from 'typeorm';

// @Injectable()
// export class CustomerRepository implements ICustomer {
//   createCustomer(customerModel: CustomerModel): Promise<CustomerModel> {
//     throw new Error('Method not implemented.');
//   }
//   getCustomer(id: number): Promise<CustomerModel> {
//     throw new Error('Method not implemented.');
//   }
//   getCustomers(): Promise<CustomerModel[]> {
//     throw new Error('Method not implemented.');
//   }
//   updateCustomer(customerModel: CustomerModel): Promise<CustomerModel> {
//     throw new Error('Method not implemented.');
//   }
//   deleteCustomer(id: number): Promise<void> {
//     throw new Error('Method not implemented.');
//   }
// }

@Injectable()
export class CustomerRepository implements ICustomer {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<Customer>,
  ) {}

  getEntityManager() {
    return this.customerRepository.manager;
  }

  createCustomer(customerModel: CustomerModel): Promise<CustomerModel> {
    return this.customerRepository.save(customerModel);
  }

  getCustomer(id: number): Promise<CustomerModel> {
    return this.customerRepository.findOne({ where: { id } });
  }
  getCustomers(): Promise<CustomerModel[]> {
    return this.customerRepository.find();
  }

  async updateCustomer(customerModel: CustomerModel): Promise<CustomerModel> {
    let customer = await this.customerRepository.findOne({
      where: { id: customerModel.id },
    });

    if (customer) {
      customer = { ...customer, ...customerModel };
      this.customerRepository.save(customer);
    }

    throw new HttpException('Customer Not Found', HttpStatus.NOT_FOUND);
  }

  deleteCustomer(id: number): Promise<void> {
    this.customerRepository.delete(id);
    return;
  }
}
