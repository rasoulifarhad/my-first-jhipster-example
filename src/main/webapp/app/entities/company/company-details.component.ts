import { Component, Vue, Inject } from 'vue-property-decorator';

import { ICompany } from '@/shared/model/company.model';
import CompanyService from './company.service';
import AlertService from '@/shared/alert/alert.service';

@Component
export default class CompanyDetails extends Vue {
  @Inject('companyService') private companyService: () => CompanyService;
  @Inject('alertService') private alertService: () => AlertService;

  public company: ICompany = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.companyId) {
        vm.retrieveCompany(to.params.companyId);
      }
    });
  }

  public retrieveCompany(companyId) {
    this.companyService()
      .find(companyId)
      .then(res => {
        this.company = res;
      })
      .catch(error => {
        this.alertService().showHttpError(this, error.response);
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
