import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddCustomerUseCase } from 'src/usecases/customer/addCustomerUseCase';

import { CreateCustomerDto, UpdateCustomerDto } from './customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly addCustomerUseCase: AddCustomerUseCase) {}
  @Post()
  async createCustomer(@Body() customer: CreateCustomerDto) {
    return this.addCustomerUseCase.createCustomer(customer);
  }

  @Get(':id')
  async getCustomer(@Param('id', ParseIntPipe) id: number) {}

  @Get()
  async getCustomers() {}

  @Put(':id')
  async updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() customer: UpdateCustomerDto,
  ) {}

  @Delete(':id')
  async deleteCustomer(@Param('id', ParseIntPipe) id: number) {}
}
