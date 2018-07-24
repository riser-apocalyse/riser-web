<template>
  <div>
    <h1>Timesheets</h1>
    <div class="card-deck">
    <BoxTimeSheet
      v-bind:key="key"
      v-for="timesheet, key in timesheets"
      :working_days="timesheet.working_days"
      :ts_start="timesheet.ts_start"
      :ts_end="timesheet.ts_end"
      :id="key"
      v-bind:status="timesheet.status"
    />
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoxTimeSheet from './BoxTimeSheet.vue'

export default {
  name: 'list-timesheets',
  components: {
    BoxTimeSheet
  },
  mounted () {
    this.loadTimesheets()
  },
  methods: {
    ...mapActions([
      'loadTimesheets'
    ])
  },
  computed: {
    ...mapState({
      'timesheets': state => state.timesheets.timesheets
    })
  }
}
</script>
