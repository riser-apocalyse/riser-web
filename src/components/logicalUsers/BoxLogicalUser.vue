<template>
  <div
    class="card"
    style="width: 25rem; margin:0 auto; margin-left:22%;"
    v-bind:class="getUserTypeColor(userType.toLowerCase())"
  >
    <div class="card-header text-muted">
      {{ userType.toLowerCase() }}
    </div>
    <router-link to="/candidate/dashboard" style="text-decoration:none; color:inherit;">
    <div class="card-block">
      <h4 class="card-title">{{ alias }}</h4>
    </div>
    </router-link>
  </div>
</template>

<script>
import { moment } from '../../filters'

export default {
  name: 'box-logical-user',
  props: ['alias', 'access', 'userType', 'id'],
  filters: {
    moment
  },
  methods: {
    getUserTypeColor (userType) {
      if (userType === 'recruiter') {
        return 'recruiter-card'
      } else if (userType === 'company') {
        return 'company-card'
      } else {
        return 'candidate-card'
      }
    }
  }
}
</script>
<style>
  .recruiter-card {
    border-color: red;
  }
  .company-card {
    border-color: green;
  }
  .candidate-card {
    border-color: blue;
  }
</style>
