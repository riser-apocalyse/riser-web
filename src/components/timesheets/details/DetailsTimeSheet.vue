<template>
  <div>
    <DetailsTimeSheetSummary />
    <DetailsTimeSheetForm />
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
        console.log('THE TIMESHEET ID: ' + this.selectedTimesheet.id)
        this.updateTimesheet(this.selectedTimesheet).then(() => {
          console.log('Timesheet updated.')
        })
      },

      processSave () {
        this.saveTimesheet()
      },

      isEditable (status) {
        return !(['X', 'S'].includes(status[0]))
      },

      addRow () {
        let workingDays = this.selectedTimesheet['working days'].slice()
        workingDays.push({
          'date': '',
          'start': '',
          'end': '',
          'break': ''
        })
        this.$set(this.selectedTimesheet, 'working days', workingDays)
      }
    },

    computed: {
      ...mapGetters([
        'getTimesheetById'
      ])
    }

}
</script>

