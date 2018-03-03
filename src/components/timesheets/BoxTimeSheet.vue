<template>
  <div class="card" style="width: 20rem;" v-bind:class="{ 'bg-secondary': isPayed}">

    <div class="card-block">
      <h4 class="card-title">XX days worked</h4>
      <p class="card-text">from {{ ts_start | moment }} to {{ ts_end | moment }}</p>
      <router-link class="btn btn-primary" :to="{ path: '/candidate/timesheet',
                       params: { timesheetId: 0 } }">Details</router-link>
    </div>
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker'
import { moment } from '../../filters'
export default {
  name: 'box-timesheet',
  props: ['status', 'ts_start', 'ts_end'],
  components: {
    Datepicker
  },
  filters: {
    moment
  },
  methods: {
    isEditable () {
      return status[0] === 'X';
    },
    isSubmitted () {
      return status[0] === 'S';
    },
    isApproved () {
      return status[0] === 'A';
    },
    isPayed () {
      return status[0] === 'P';
    }
  }
}
</script>
