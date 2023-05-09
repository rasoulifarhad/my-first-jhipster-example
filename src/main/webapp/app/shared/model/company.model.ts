import { ICustomer } from '@/shared/model/customer.model';

export interface ICompany {
  id?: number;
  companyName?: string;
  customers?: ICustomer[] | null;
}

export class Company implements ICompany {
  constructor(public id?: number, public companyName?: string, public customers?: ICustomer[] | null) {}
}
