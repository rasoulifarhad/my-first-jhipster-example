import { Component, Vue, Inject } from 'vue-property-decorator';

import AlertService from '@/shared/alert/alert.service';

import CompanyService from '@/entities/company/company.service';
import { ICompany } from '@/shared/model/company.model';

import { ILocation, Location } from '@/shared/model/location.model';
import LocationService from './location.service';

const validations: any = {
  location: {
    streetAddress: {},
    postalCode: {},
    city: {},
  },
};

@Component({
  validations,
})
export default class LocationUpdate extends Vue {
  @Inject('locationService') private locationService: () => LocationService;
  @Inject('alertService') private alertService: () => AlertService;

  public location: ILocation = new Location();

  @Inject('companyService') private companyService: () => CompanyService;

  public companies: ICompany[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.locationId) {
        vm.retrieveLocation(to.params.locationId);
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
    if (this.location.id) {
      this.locationService()
        .update(this.location)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Location is updated with identifier ' + param.id;
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
      this.locationService()
        .create(this.location)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Location is created with identifier ' + param.id;
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

  public retrieveLocation(locationId): void {
    this.locationService()
      .find(locationId)
      .then(res => {
        this.location = res;
      })
      .catch(error => {
        this.alertService().showHttpError(this, error.response);
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.companyService()
      .retrieve()
      .then(res => {
        this.companies = res.data;
      });
  }
}
