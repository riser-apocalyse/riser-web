<template>
  <div class="card">
    <div class="card-header">
      Summary:
    </div>
    <div class="card-body">
      <h5 class="card-title">Status: {{translateStatus(status)}}</h5>
      <p class="card-text">Period: {{ ts_start | moment }} to {{ ts_end | moment }}</p>
    </div>
  </div>
</template>
<script>
import { moment } from "../../../filters";

export default {
  name: 'details-timesheet-summary',
  props: ['status', 'ts_start', 'ts_end'],
  filters: {
    moment
  },
  methods: {
    translateStatus (status) {
        let statusMap = {
          'X': 'pending',
          'S': 'submitted',
          'A': 'submitted',
          'B': 'approved'
        }
        let tsStatus = status ? status[0]: null
        return statusMap[tsStatus]
    }
  }
}
</script>

