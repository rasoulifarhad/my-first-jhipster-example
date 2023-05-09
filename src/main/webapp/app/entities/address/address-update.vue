<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2 id="myjhipsterplanetApp.address.home.createOrEditLabel" data-cy="AddressCreateUpdateHeading">Create or edit a Address</h2>
        <div>
          <div class="form-group" v-if="address.id">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="address.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="address-streetAddress">Street Address</label>
            <input
              type="text"
              class="form-control"
              name="streetAddress"
              id="address-streetAddress"
              data-cy="streetAddress"
              :class="{ valid: !$v.address.streetAddress.$invalid, invalid: $v.address.streetAddress.$invalid }"
              v-model="$v.address.streetAddress.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="address-postalCode">Postal Code</label>
            <input
              type="text"
              class="form-control"
              name="postalCode"
              id="address-postalCode"
              data-cy="postalCode"
              :class="{ valid: !$v.address.postalCode.$invalid, invalid: $v.address.postalCode.$invalid }"
              v-model="$v.address.postalCode.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="address-city">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              id="address-city"
              data-cy="city"
              :class="{ valid: !$v.address.city.$invalid, invalid: $v.address.city.$invalid }"
              v-model="$v.address.city.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="address-customer">Customer</label>
            <select class="form-control" id="address-customer" data-cy="customer" name="customer" v-model="address.customer">
              <option v-bind:value="null"></option>
              <option
                v-bind:value="address.customer && customerOption.id === address.customer.id ? address.customer : customerOption"
                v-for="customerOption in customers"
                :key="customerOption.id"
              >
                {{ customerOption.id }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" data-cy="entityCreateCancelButton" class="btn btn-secondary" v-on:click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="$v.address.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./address-update.component.ts"></script>
