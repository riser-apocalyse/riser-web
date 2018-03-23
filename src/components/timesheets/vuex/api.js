import axios from 'axios'
import momentjs from 'moment'

import { moment } from '../../../filters'

const SERVER_URL = process.env.SERVER_URL || '82.223.35.243'

export const saveTimesheet = timesheet => {
  timesheet = Object.assign({}, timesheet)
  timesheet.ts_start = moment(timesheet.ts_start)
  timesheet.ts_end = moment(timesheet.ts_end)
  let workingDays = timesheet.working_days
  workingDays.forEach(day => {
    if (day.editable) {
      delete day.editable
    }
    day.date = moment(day.date)
  })
  timesheet.working_days = workingDays
  console.log(timesheet)
  let idURL = timesheet.id.split('-')[1]
  let url = `http://${SERVER_URL}/2/2/${idURL}/riserts.fcgi`
  delete timesheet.id
  return axios
    .post(url, { timesheet: timesheet })
    .then(res => {
      return res.data
    })
    .catch(res => {
      console.log('ERROR: ' + res)
    })
}

export const updateTimesheetStatus = timesheet => {
  timesheet = Object.assign({}, timesheet)
  timesheet.ts_start = timesheet.ts_start.toJSON()
  timesheet.ts_end = timesheet.ts_end.toJSON()
  let workingDays = timesheet.working_days
  workingDays.forEach(day => {
    if (day.editable) {
      delete day.editable
    }
    day.date = moment(day.date).toString()
  })
  timesheet.working_days = workingDays
  console.log(timesheet)
  let idURL = timesheet.id.split('-')[1]
  let url = `http://${SERVER_URL}/2/2/${idURL}/riserts.fcgi`
  delete timesheet.id
  return axios
    .post(url, { timesheet: timesheet })
    .then(res => {
      return res.data
    })
    .catch(res => {
      console.log('ERROR: ' + res)
    })
}

export const fetchTimesheets = (user, token) => {
  return axios
    .get(`http://${SERVER_URL}/2/2/riserts.fcgi`, { user, token })
    .then(res => {
      console.log('fetching timesheets...')
      let timesheets = res.data.timesheet
      Object.keys(timesheets).forEach(index => {
        timesheets[index].ts_start = new Date(
          momentjs(timesheets[index].ts_start).format('YYYY-MM-DD')
        )
        timesheets[index].ts_end = new Date(
          momentjs(timesheets[index].ts_end).format('YYYY-MM-DD')
        )
      })
      return timesheets
    })
}

export const removeTimesheet = timesheet => {
  console.log(timesheet.id)
  return axios
    .delete('http://localhost:7000/api/timesheets/' + timesheet.id)
    .then(res => {
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })
}
