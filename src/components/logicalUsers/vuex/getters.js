export default {
  getUserById: (state, getters) => timesheetId => {
    return state.timesheets && timesheetId in state.timesheets
      ? state.timesheets[timesheetId]
      : false
  }
}
