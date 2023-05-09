<template>
  <div>
    <b-dropdown-item to="/company">
      <font-awesome-icon icon="asterisk" />
      <span>Company</span>
    </b-dropdown-item>
    <b-dropdown-item to="/location">
      <font-awesome-icon icon="asterisk" />
      <span>Location</span>
    </b-dropdown-item>
    <b-dropdown-item to="/customer">
      <font-awesome-icon icon="asterisk" />
      <span>Customer</span>
    </b-dropdown-item>
    <b-dropdown-item to="/address">
      <font-awesome-icon icon="asterisk" />
      <span>Address</span>
    </b-dropdown-item>
    <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
  </div>
</template>

<script lang="ts" src="./entities-menu.component.ts"></script>
