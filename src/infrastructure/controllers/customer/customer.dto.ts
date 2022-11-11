import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  phone_no: string;
}

export class UpdateCustomerDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  phone_no: string;
}
