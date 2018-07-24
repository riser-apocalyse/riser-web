<template>
  <div
    class="card superbox"
    style="width: 20rem;">
    <div class="card-block" v-bind:class=get_status(status)>
      <h4 class="card-title">{{ working_days.length }} days worked</h4>
      <p class="card-text">from {{ ts_start | moment }} to {{ ts_end | moment }}</p>
      <router-link
        class="btn btn-primary"
        :to="{ name: 'candidate-timesheet', params: { id: id } }"
      >Details</router-link>
    </div>
  </div>
</template>

<script>
import { moment } from '../../filters'

export default {
  name: 'box-timesheet',
  props: ['working_days', 'status', 'ts_start', 'ts_end', 'id'],
  filters: {
    moment
  },
  methods: {
    isEditable () {
      return status[0] === 'X'
    },
    isSubmitted () {
      return status[0] === 'S'
    },
    isApproved () {
      return status[0] === 'A'
    },
    isPayed () {
      return status[0] === 'P'
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
    },
    get_status (status) {
       if (status[0] === 'X') {
         return 'bg-editable'
       } else {
         return 'bg-secondary'
       }
    }
  }
}
</script>
<style>
  .bg-editable {
    background-color: #FEFE94;
  }
  .superbox {
    min-width: 20rem;
    margin-bottom: 15px !important;
  }
</style>
