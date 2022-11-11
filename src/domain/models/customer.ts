export class CustomerModel {
  id?: number;
  name: string;
  email: string;
  phone_no: string;
}

export class CustomerModelWithUserID {
  id?: number;
  name: string;
  email: string;
  phone_no: string;
  userID: number;
}
