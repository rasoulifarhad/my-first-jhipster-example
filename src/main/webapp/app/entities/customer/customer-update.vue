<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2 id="myjhipsterplanetApp.customer.home.createOrEditLabel" data-cy="CustomerCreateUpdateHeading">Create or edit a Customer</h2>
        <div>
          <div class="form-group" v-if="customer.id">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="customer.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="customer-customerName">Customer Name</label>
            <input
              type="text"
              class="form-control"
              name="customerName"
              id="customer-customerName"
              data-cy="customerName"
              :class="{ valid: !$v.customer.customerName.$invalid, invalid: $v.customer.customerName.$invalid }"
              v-model="$v.customer.customerName.$model"
              required
            />
            <div v-if="$v.customer.customerName.$anyDirty && $v.customer.customerName.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.customerName.required"> This field is required. </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" for="customer-company">Company</label>
            <select class="form-control" id="customer-company" data-cy="company" name="company" v-model="customer.company">
              <option v-bind:value="null"></option>
              <option
                v-bind:value="customer.company && companyOption.id === customer.company.id ? customer.company : companyOption"
                v-for="companyOption in companies"
                :key="companyOption.id"
              >
                {{ companyOption.id }}
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
            :disabled="$v.customer.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./customer-update.component.ts"></script>
