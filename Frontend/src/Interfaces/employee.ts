export interface IEmployee {
  identification?: string;
  name?: string;
  last_name?: string;
  phone_numbers?: [string];
  email?: string;
  address?: string;
  role_code?: string;
  nationality?: string;
  birth_date?: Date;
  picture?: string;
}
