import { ICompany } from '@/shared/model/company.model';

export interface ICustomer {
  id?: number;
  customerName?: string;
  company?: ICompany | null;
}

export class Customer implements ICustomer {
  constructor(public id?: number, public customerName?: string, public company?: ICompany | null) {}
}
