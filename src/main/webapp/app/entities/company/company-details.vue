<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="company">
        <h2 class="jh-entity-heading" data-cy="companyDetailsHeading"><span>Company</span> {{ company.id }}</h2>
        <dl class="row jh-entity-details">
          <dt>
            <span>Company Name</span>
          </dt>
          <dd>
            <span>{{ company.companyName }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
        </button>
        <router-link v-if="company.id" :to="{ name: 'CompanyEdit', params: { companyId: company.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./company-details.component.ts"></script>
