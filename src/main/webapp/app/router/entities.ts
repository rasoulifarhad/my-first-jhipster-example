import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore
const Entities = () => import('@/entities/entities.vue');

// prettier-ignore
const Company = () => import('@/entities/company/company.vue');
// prettier-ignore
const CompanyUpdate = () => import('@/entities/company/company-update.vue');
// prettier-ignore
const CompanyDetails = () => import('@/entities/company/company-details.vue');
// prettier-ignore
const Location = () => import('@/entities/location/location.vue');
// prettier-ignore
const LocationUpdate = () => import('@/entities/location/location-update.vue');
// prettier-ignore
const LocationDetails = () => import('@/entities/location/location-details.vue');
// prettier-ignore
const Customer = () => import('@/entities/customer/customer.vue');
// prettier-ignore
const CustomerUpdate = () => import('@/entities/customer/customer-update.vue');
// prettier-ignore
const CustomerDetails = () => import('@/entities/customer/customer-details.vue');
// prettier-ignore
const Address = () => import('@/entities/address/address.vue');
// prettier-ignore
const AddressUpdate = () => import('@/entities/address/address-update.vue');
// prettier-ignore
const AddressDetails = () => import('@/entities/address/address-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default {
  path: '/',
  component: Entities,
  children: [
    {
      path: 'company',
      name: 'Company',
      component: Company,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'company/new',
      name: 'CompanyCreate',
      component: CompanyUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'company/:companyId/edit',
      name: 'CompanyEdit',
      component: CompanyUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'company/:companyId/view',
      name: 'CompanyView',
      component: CompanyDetails,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'location',
      name: 'Location',
      component: Location,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'location/new',
      name: 'LocationCreate',
      component: LocationUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'location/:locationId/edit',
      name: 'LocationEdit',
      component: LocationUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'location/:locationId/view',
      name: 'LocationView',
      component: LocationDetails,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'customer',
      name: 'Customer',
      component: Customer,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'customer/new',
      name: 'CustomerCreate',
      component: CustomerUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'customer/:customerId/edit',
      name: 'CustomerEdit',
      component: CustomerUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'customer/:customerId/view',
      name: 'CustomerView',
      component: CustomerDetails,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'address',
      name: 'Address',
      component: Address,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'address/new',
      name: 'AddressCreate',
      component: AddressUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'address/:addressId/edit',
      name: 'AddressEdit',
      component: AddressUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'address/:addressId/view',
      name: 'AddressView',
      component: AddressDetails,
      meta: { authorities: [Authority.USER] },
    },
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ],
};
