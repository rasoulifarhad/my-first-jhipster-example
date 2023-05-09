<template>
  <div>
    <h2 id="page-heading" data-cy="AddressHeading">
      <span id="address-heading">Addresses</span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info mr-2" v-on:click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon> <span>Refresh List</span>
        </button>
        <router-link :to="{ name: 'AddressCreate' }" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            id="jh-create-entity"
            data-cy="entityCreateButton"
            class="btn btn-primary jh-create-entity create-address"
          >
            <font-awesome-icon icon="plus"></font-awesome-icon>
            <span> Create a new Address </span>
          </button>
        </router-link>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && addresses && addresses.length === 0">
      <span>No addresses found</span>
    </div>
    <div class="table-responsive" v-if="addresses && addresses.length > 0">
      <table class="table table-striped" aria-describedby="addresses">
        <thead>
          <tr>
            <th scope="row"><span>ID</span></th>
            <th scope="row"><span>Street Address</span></th>
            <th scope="row"><span>Postal Code</span></th>
            <th scope="row"><span>City</span></th>
            <th scope="row"><span>Customer</span></th>
            <th scope="row"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="address in addresses" :key="address.id" data-cy="entityTable">
            <td>
              <router-link :to="{ name: 'AddressView', params: { addressId: address.id } }">{{ address.id }}</router-link>
            </td>
            <td>{{ address.streetAddress }}</td>
            <td>{{ address.postalCode }}</td>
            <td>{{ address.city }}</td>
            <td>
              <div v-if="address.customer">
                <router-link :to="{ name: 'CustomerView', params: { customerId: address.customer.id } }">{{
                  address.customer.id
                }}</router-link>
              </div>
            </td>
            <td class="text-right">
              <div class="btn-group">
                <router-link :to="{ name: 'AddressView', params: { addressId: address.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-info btn-sm details" data-cy="entityDetailsButton">
                    <font-awesome-icon icon="eye"></font-awesome-icon>
                    <span class="d-none d-md-inline">View</span>
                  </button>
                </router-link>
                <router-link :to="{ name: 'AddressEdit', params: { addressId: address.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-primary btn-sm edit" data-cy="entityEditButton">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                    <span class="d-none d-md-inline">Edit</span>
                  </button>
                </router-link>
                <b-button
                  v-on:click="prepareRemove(address)"
                  variant="danger"
                  class="btn btn-sm"
                  data-cy="entityDeleteButton"
                  v-b-modal.removeEntity
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                  <span class="d-none d-md-inline">Delete</span>
                </b-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal ref="removeEntity" id="removeEntity">
      <span slot="modal-title"
        ><span id="myjhipsterplanetApp.address.delete.question" data-cy="addressDeleteDialogHeading">Confirm delete operation</span></span
      >
      <div class="modal-body">
        <p id="jhi-delete-address-heading">Are you sure you want to delete this Address?</p>
      </div>
      <div slot="modal-footer">
        <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
        <button
          type="button"
          class="btn btn-primary"
          id="jhi-confirm-delete-address"
          data-cy="entityConfirmDeleteButton"
          v-on:click="removeAddress()"
        >
          Delete
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./address.component.ts"></script>
