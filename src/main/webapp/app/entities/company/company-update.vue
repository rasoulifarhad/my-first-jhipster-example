<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2 id="myjhipsterplanetApp.company.home.createOrEditLabel" data-cy="CompanyCreateUpdateHeading">Create or edit a Company</h2>
        <div>
          <div class="form-group" v-if="company.id">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="company.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="company-companyName">Company Name</label>
            <input
              type="text"
              class="form-control"
              name="companyName"
              id="company-companyName"
              data-cy="companyName"
              :class="{ valid: !$v.company.companyName.$invalid, invalid: $v.company.companyName.$invalid }"
              v-model="$v.company.companyName.$model"
              required
            />
            <div v-if="$v.company.companyName.$anyDirty && $v.company.companyName.$invalid">
              <small class="form-text text-danger" v-if="!$v.company.companyName.required"> This field is required. </small>
            </div>
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
            :disabled="$v.company.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./company-update.component.ts"></script>
