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

export interface Customer {
  _id?: string;
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}
