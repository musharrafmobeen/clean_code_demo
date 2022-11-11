import { CustomerModel } from 'src/domain/models/customer';

export interface ICustomer {
  createCustomer(customerModel: CustomerModel): Promise<CustomerModel>;
  getCustomer(id: number): Promise<CustomerModel>;
  getCustomers(): Promise<CustomerModel[]>;
  updateCustomer(customerModel: CustomerModel): Promise<CustomerModel>;
  deleteCustomer(id: number): Promise<void>;
}
