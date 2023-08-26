export interface ISupplier {
  _id?: string
  code?: string;
  identification?: string;
  first_purchase?: Date;
  name?: string;
  last_name?: string;
  phone_numbers?: [string];
  email?: string;
  address?: string;
  picture?: string;
}
