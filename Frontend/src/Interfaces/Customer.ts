import { IOrderDetails } from "./order";

export interface Country {
  _id?: string;
  name?: string;
  code?: string;
}

export interface Representative {
  _id?: string;
  name?: string;
  image?: string;
}

export interface ICustomer {
  code: string;
  full_name: string;
  amount_paid: number;
  date: Date;
  reserved: boolean;
  bar_used: boolean;
  table: number;
  status: string;
  order: [IOrderDetails];
}
