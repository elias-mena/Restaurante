export interface User {
  id?: string;
  username?: string;
  name?: string;
  last_name?: string;
  phone_numbers?: string;
  sis_admin?: string;
  rest_admin?: string;
  accounts_admin?: string;
}

export interface LoginInformation {
  username?: string;
  password?: string;
}
