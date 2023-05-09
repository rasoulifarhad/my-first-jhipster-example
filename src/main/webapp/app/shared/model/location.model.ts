import { ICompany } from '@/shared/model/company.model';

export interface ILocation {
  id?: number;
  streetAddress?: string | null;
  postalCode?: string | null;
  city?: string | null;
  company?: ICompany | null;
}

export class Location implements ILocation {
  constructor(
    public id?: number,
    public streetAddress?: string | null,
    public postalCode?: string | null,
    public city?: string | null,
    public company?: ICompany | null
  ) {}
}
