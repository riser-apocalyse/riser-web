<template>
  <div>
    <h1>list timesheets</h1>
    <BoxTimeSheet v-bind:key="key" v-for="timesheet, key in timesheets" v-bind:status="timesheet.status" v-bind:ts_start="timesheet.ts_start" v-bind:ts_end="timesheet.ts_end" />
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import BoxTimeSheet from './BoxTimeSheet.vue';

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
      ]),
  },
  computed: {
      ...mapState({
        'timesheets': state => state.timesheets.timesheets
      })
  }
}
</script>
