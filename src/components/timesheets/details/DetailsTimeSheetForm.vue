<template>
  <form class="form" @submit.prevent="processSave">
    <p type="submit" class="btn btn-primary" @click="changeStatus">Submit</p>
    <p v-if="!isEditable(status)"
       type="submit" class="btn btn-secondary"
       @click="addRow"
    >New Entry</p>
    <div class="form-group">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Time Start</th>
            <th scope="col">Time End</th>
            <th scope="col">Break</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="key" v-for="day, key in workingDays">
            <th scope="row">
              <div v-if="day.date === ''">
                <datepicker
                  name="date"
                  input-class="input"
                  format="MMMM yyyy"
                  v-model="day.date"
                  :openDate="openDate"
                  :disabled="getDisabled(openDate, fromDate, workingDays)"
                ></datepicker>
              </div>
              <div v-else style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis">
                {{ day.date | moment }}
              </div>
            </th>
            <td>
              <input
                type="text"
                name="start"
                v-model="day.start"
                class="form-control"
                id="#1"
                placeholder="placeholder"
                :disabled="isEditable(status)"
              >
            </td>
            <td>
              <input
                type="text"
                name="end"
                v-model="day.end"
                class="form-control"
                id="#1"
                placeholder="placeholder"
                :disabled="isEditable(status)"
              >
            </td>
            <td>
              <input
                type="text"
                name="break"
                v-model="day.break"
                class="form-control"
                id="#1"
                placeholder="placeholder"
                :disabled="isEditable(status)"
              >
            </td>
            <td>
              <p
                class="btn btn-secondary"
                v-if="day.editable"
                @click="removeRow(day)"
              >x</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>
<script>

import Datepicker from 'vuejs-datepicker'
import { moment } from '../../../filters'

export default {
  name: 'details-timesheet-form',
  components: {
    Datepicker
  },
  filters: {
    moment
  },
  props: [
    'workingDays', 'status', 'openDate', 'fromDate'
  ],
  methods: {
    addRow () {
      let workingDays = this.workingDays.slice()
      workingDays.push({
        break: '',
        date: '',
        start: '',
        end: '',
        state: 'X',
        editable: true
      })
      this.$emit('addRow', workingDays)
    },
    removeRow (day) {
      let workingDays = this.workingDays.slice()
      let indexOfDayToRemove = workingDays.indexOf(day)
      workingDays.splice(indexOfDayToRemove, 1)
      console.log(workingDays)
      this.$emit('removeRow', workingDays)
    },
    processSave () {
     this.$emit('saveTimesheet', '')
    },
    changeStatus () {
      console.log('Change status')
    },
    isEditable (status) {
      return status ? !['X'].includes(status[0]) : false
    },
    getDisabled (openDate, fromDate, workingDays) {
      return {
        to: new Date(openDate),
        from: new Date(fromDate),
        dates: workingDays.map(date => new Date(date.date))
      }
    }
  }
}
</script>

