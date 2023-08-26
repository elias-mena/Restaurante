export interface IBrand {
  code?: string;
  name?: string;
  description?: string;
  nationality?: string;
  picture?: string;
  company?: {
    legal_id?: string;
    name?: string;
    details?: string;
    address?: string;
    phone?: string;
    email?: string;
    picture?: string;
  };
}
