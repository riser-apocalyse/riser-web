<template>
  <div class="card" style="width: 20rem;" v-bind:class="{ 'bg-secondary': isPayed}">
    <div class="card-block">
      <h4 class="card-title">{{working_days.length}} days worked</h4>
      <p class="card-text">from {{ ts_start | moment }} to {{ ts_end | moment }}</p>
      <router-link class="btn btn-primary" :to="{ name: 'candidate-timesheet',
                       params: { id: id } }">Details</router-link>
    </div>
  </div>
</template>

<script>

import { moment } from '../../filters'
export default {
  name: 'box-timesheet',
  props: ['working_days', 'status', 'ts_start', 'ts_end', "id"],
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
    },
    translateStatus (status) {
        let statusMap = {
          'X': 'pending',
          'S': 'submitted',
          'A': 'submitted',
          'B': 'approved'
        }
        let tsStatus = status[0]
        return statusMap[tsStatus]
    }
  }
}
</script>
