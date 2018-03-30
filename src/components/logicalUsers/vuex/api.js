import axios from 'axios'
import momentjs from 'moment'

import { moment } from '../../../filters'

const SERVER_URL = process.env.SERVER_URL || '82.223.35.243'

export const saveLogicalUser = logicalUsers => {
  logicalUsers = Object.assign({}, timesheet)
  logicalUsers.last_seen = moment(timesheet.ts_start, 'YYYY-MM-DD')
  console.log(logicalUsers)
  let idURL = logicalUsers.id.split('-')[1]
  let url = `http://${SERVER_URL}/2/2/${idURL}/riserts.fcgi`
  delete logicalUsers.id
  return axios
    .post(url, { logicalUsers: logicalUsers })
    .then(res => {
      return res.data
    })
    .catch(res => {
      console.log('ERROR: ' + res)
    })
}

export const updateLogicalUser = logicalUser => {
  logicalUser = Object.assign({}, logicalUser)
  logicalUser.ts_start = logicalUser.ts_start.toJSON()
  logicalUser.ts_end = logicalUser.ts_end.toJSON()
  console.log(logicalUser)
  let idURL = logicalUser.id.split('-')[1]
  let url = `http://${SERVER_URL}/2/2/${idURL}/riserts.fcgi`
  delete logicalUser.id
  return axios
    .post(url, { logicalUser: logicalUser })
    .then(res => {
      return res.data
    })
    .catch(res => {
      console.log('ERROR: ' + res)
    })
}

export const fetchLogicalUsers = (user, token) => {
  return axios
    .get(`http://${SERVER_URL}/user/2/-/list/riseranagraph.fcgi`, { user, token })
    .then(res => {
      console.log('fetching logicalUsers...')
      return res.data.logical
    })
}

export const removeLogicalUser = logicalUser => {
  console.log(logicalUser.id)
  return axios
    .delete('http://localhost:7000/api/timesheets/' + logicalUser.id)
    .then(res => {
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })
}
