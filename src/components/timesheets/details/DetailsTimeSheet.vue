<template>
  <div>
    <DetailsTimeSheetSummary :status="selectedTimesheet.status" :ts_start="selectedTimesheet.ts_start" :ts_end="selectedTimesheet.ts_end" />
    <DetailsTimeSheetForm :working_days="selectedTimesheet.working_days" :status="selectedTimesheet.status" v-on:addRow="addRow" v-on:saveTimesheet="saveTimesheet" />
  </div>
</template>
<script>

import Datepicker from 'vuejs-datepicker'
import { mapActions, mapGetters } from 'vuex'
import { moment } from '../../../filters'
import DetailsTimeSheetForm from './DetailsTimeSheetForm'
import DetailsTimeSheetSummary from './DetailsTimeSheetSummary'

export default {
  name: 'details-timesheet',
  components: {
    Datepicker,
    DetailsTimeSheetSummary,
    DetailsTimeSheetForm
  },
  filters: {
    moment
  },
  data: () => {
      return {
        selectedTimesheet: {},
        editing: false
      }
  },
  mounted () {
      const id = this.$route.params.id;
      if(this.getTimesheetById(id)) {
         this.editing = true
         this.selectedTimesheet = Object.assign({}, this.getTimesheetById(id))
         this.selectedTimesheet.id = id
      } else { // when reloading page.
        this.loadTimesheets().then(() => {
          let selectedTimesheet = this.getTimesheetById(id)
          if (selectedTimesheet) {
            this.editing = true
            this.selectedTimesheet = Object.assign({}, this.getTimesheetById(id))
            this.selectedTimesheet.id = id
          }
        })
      }
  },
  methods: {
      ...mapActions([
        'updateTimesheet',
        'loadTimesheets'
      ]),

      saveTimesheet () {
        console.log(JSON.stringify(this.selectedTimesheet))
/*         this.updateTimesheet(this.selectedTimesheet).then(() => {
          console.log('Timesheet updated.')
        }) */
      },

      addRow (payload) {
        this.$set(this.selectedTimesheet, "working_days", payload);
      }
    },

    computed: {
      ...mapGetters([
        'getTimesheetById'
      ])
    }

}
</script>

