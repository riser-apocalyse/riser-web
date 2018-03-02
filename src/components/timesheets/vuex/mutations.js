import Vue from 'vue'

export default {
  CREATE_TIMESHEET(state, timesheet) {
    state.timesheets[timesheet.id] = timesheet
  },

  UPDATE_TIMESHEET(state, data) {
    state.timesheets[data.tsId] = data.timesheet
  },

  LOAD_TIMESHEETS(state, payload) {
    state.timesheets = payload
  },

  DELETE_TIMESHEET(state, timesheet) {
    let index = state.timesheets.indexOf(timesheet)
    Vue.delete(state.timesheets, index)
  }
}
