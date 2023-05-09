import { Component, Provide, Vue } from 'vue-property-decorator';

import UserService from '@/entities/user/user.service';
import CompanyService from './company/company.service';
import LocationService from './location/location.service';
import CustomerService from './customer/customer.service';
import AddressService from './address/address.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

@Component
export default class Entities extends Vue {
  @Provide('userService') private userService = () => new UserService();
  @Provide('companyService') private companyService = () => new CompanyService();
  @Provide('locationService') private locationService = () => new LocationService();
  @Provide('customerService') private customerService = () => new CustomerService();
  @Provide('addressService') private addressService = () => new AddressService();
  // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
}
