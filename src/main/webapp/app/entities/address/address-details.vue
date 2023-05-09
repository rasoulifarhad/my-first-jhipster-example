<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="address">
        <h2 class="jh-entity-heading" data-cy="addressDetailsHeading"><span>Address</span> {{ address.id }}</h2>
        <dl class="row jh-entity-details">
          <dt>
            <span>Street Address</span>
          </dt>
          <dd>
            <span>{{ address.streetAddress }}</span>
          </dd>
          <dt>
            <span>Postal Code</span>
          </dt>
          <dd>
            <span>{{ address.postalCode }}</span>
          </dd>
          <dt>
            <span>City</span>
          </dt>
          <dd>
            <span>{{ address.city }}</span>
          </dd>
          <dt>
            <span>Customer</span>
          </dt>
          <dd>
            <div v-if="address.customer">
              <router-link :to="{ name: 'CustomerView', params: { customerId: address.customer.id } }">{{
                address.customer.id
              }}</router-link>
            </div>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
        </button>
        <router-link v-if="address.id" :to="{ name: 'AddressEdit', params: { addressId: address.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./address-details.component.ts"></script>
