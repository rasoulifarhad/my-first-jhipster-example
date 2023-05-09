<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="customer">
        <h2 class="jh-entity-heading" data-cy="customerDetailsHeading"><span>Customer</span> {{ customer.id }}</h2>
        <dl class="row jh-entity-details">
          <dt>
            <span>Customer Name</span>
          </dt>
          <dd>
            <span>{{ customer.customerName }}</span>
          </dd>
          <dt>
            <span>Company</span>
          </dt>
          <dd>
            <div v-if="customer.company">
              <router-link :to="{ name: 'CompanyView', params: { companyId: customer.company.id } }">{{ customer.company.id }}</router-link>
            </div>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
        </button>
        <router-link v-if="customer.id" :to="{ name: 'CustomerEdit', params: { customerId: customer.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./customer-details.component.ts"></script>
