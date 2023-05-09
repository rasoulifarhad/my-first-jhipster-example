<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2 id="myjhipsterplanetApp.location.home.createOrEditLabel" data-cy="LocationCreateUpdateHeading">Create or edit a Location</h2>
        <div>
          <div class="form-group" v-if="location.id">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="location.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="location-streetAddress">Street Address</label>
            <input
              type="text"
              class="form-control"
              name="streetAddress"
              id="location-streetAddress"
              data-cy="streetAddress"
              :class="{ valid: !$v.location.streetAddress.$invalid, invalid: $v.location.streetAddress.$invalid }"
              v-model="$v.location.streetAddress.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="location-postalCode">Postal Code</label>
            <input
              type="text"
              class="form-control"
              name="postalCode"
              id="location-postalCode"
              data-cy="postalCode"
              :class="{ valid: !$v.location.postalCode.$invalid, invalid: $v.location.postalCode.$invalid }"
              v-model="$v.location.postalCode.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="location-city">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              id="location-city"
              data-cy="city"
              :class="{ valid: !$v.location.city.$invalid, invalid: $v.location.city.$invalid }"
              v-model="$v.location.city.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="location-company">Company</label>
            <select class="form-control" id="location-company" data-cy="company" name="company" v-model="location.company">
              <option v-bind:value="null"></option>
              <option
                v-bind:value="location.company && companyOption.id === location.company.id ? location.company : companyOption"
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
            :disabled="$v.location.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./location-update.component.ts"></script>
