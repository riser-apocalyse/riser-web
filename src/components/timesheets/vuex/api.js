import axios from 'axios'
import momentjs from 'moment'

import { moment } from '../../../filters'
import store from '../../../store'

const SERVER_URL = 'ss0mjd1woa.execute-api.eu-west-1.amazonaws.com/Prod'  // process.env.SERVER_URL||

axios.interceptors.request.use(async config => {
  const response = await store.dispatch('getUserSession')
  if (response && response.idToken && response.idToken.jwtToken) {
    config.headers.AccessToken = response.idToken.jwtToken
  }
  return config
})

export const saveTimesheet = timesheet => {
  timesheet = Object.assign({}, timesheet)
  timesheet.ts_start = moment(timesheet.ts_start, 'YYYY-MM-DD')
  timesheet.ts_end = moment(timesheet.ts_end, 'YYYY-MM-DD')
  let workingDays = timesheet.working_days
  workingDays.forEach(day => {
    if (day.editable) {
      delete day.editable
    }
    day.date = moment(day.date, 'YYYY-MM-DD')
  })
  timesheet.working_days = workingDays
  console.log(timesheet)
  let idURL = timesheet.id.split('-')[1]
  let url = `https://${SERVER_URL}/contract/1/timesheets/${idURL}`
  delete timesheet.id
  return axios
    .put(url, { timesheet: timesheet })
    .then(res => {
      console.log(res)
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
  let url = `https://${SERVER_URL}/2/2/${idURL}/riserts.fcgi`
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
    .get(`https://dzolhl055l.execute-api.eu-west-1.amazonaws.com/Prod/contract/1/timesheets`, { user, token })
    .then(res => {
      console.log('fetching timesheets...')
      let timesheets = res.data.timesheets
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
    .delete('https://localhost:7000/api/timesheets/' + timesheet.id)
    .then(res => {
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })
}
