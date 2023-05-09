import { Component, Vue, Inject } from 'vue-property-decorator';

import { required } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';

import CustomerService from '@/entities/customer/customer.service';
import { ICustomer } from '@/shared/model/customer.model';

import { ICompany, Company } from '@/shared/model/company.model';
import CompanyService from './company.service';

const validations: any = {
  company: {
    companyName: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class CompanyUpdate extends Vue {
  @Inject('companyService') private companyService: () => CompanyService;
  @Inject('alertService') private alertService: () => AlertService;

  public company: ICompany = new Company();

  @Inject('customerService') private customerService: () => CustomerService;

  public customers: ICustomer[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.companyId) {
        vm.retrieveCompany(to.params.companyId);
      }
      vm.initRelationships();
    });
  }

  created(): void {
    this.currentLanguage = this.$store.getters.currentLanguage;
    this.$store.watch(
      () => this.$store.getters.currentLanguage,
      () => {
        this.currentLanguage = this.$store.getters.currentLanguage;
      }
    );
  }

  public save(): void {
    this.isSaving = true;
    if (this.company.id) {
      this.companyService()
        .update(this.company)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Company is updated with identifier ' + param.id;
          return (this.$root as any).$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        })
        .catch(error => {
          this.isSaving = false;
          this.alertService().showHttpError(this, error.response);
        });
    } else {
      this.companyService()
        .create(this.company)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Company is created with identifier ' + param.id;
          (this.$root as any).$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Success',
            variant: 'success',
            solid: true,
            autoHideDelay: 5000,
          });
        })
        .catch(error => {
          this.isSaving = false;
          this.alertService().showHttpError(this, error.response);
        });
    }
  }

  public retrieveCompany(companyId): void {
    this.companyService()
      .find(companyId)
      .then(res => {
        this.company = res;
      })
      .catch(error => {
        this.alertService().showHttpError(this, error.response);
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.customerService()
      .retrieve()
      .then(res => {
        this.customers = res.data;
      });
  }
}
