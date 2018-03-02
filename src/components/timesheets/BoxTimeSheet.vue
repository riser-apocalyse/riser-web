<template>
  <div class="card bg-warning" style="width: 20rem;" v-bind:class="{ 'bg-secondary': 'isPayed', 'bg-success': isApproved, 'bg-warning': isSubmitted, 'bg-primary': isEditable }">

    <div class="card-block">
      <h4 class="card-title">XX days worked</h4>
      <p class="card-text">from {{ ts_start | moment }} to {{ ts_end | moment }}</p>
      <a href="#" class="btn btn-primary">Details</a>
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
      console.log('aaa', status[0]);
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
