import { ICustomer } from '@/shared/model/customer.model';

export interface IAddress {
  id?: number;
  streetAddress?: string | null;
  postalCode?: string | null;
  city?: string | null;
  customer?: ICustomer | null;
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public streetAddress?: string | null,
    public postalCode?: string | null,
    public city?: string | null,
    public customer?: ICustomer | null
  ) {}
}
