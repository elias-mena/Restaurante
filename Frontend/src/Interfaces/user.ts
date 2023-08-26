export interface IUser {
  _id?: string
  code?: string;
  username?: string;
  password?: string;
  name?: string;
  last_name?: string;
  phone_numbers?: [string];
  email?: string;
  sis_admin?: boolean;
  rest_admin?: boolean;
  accounts_admin?: boolean;
  recovery_token?: string;
}
