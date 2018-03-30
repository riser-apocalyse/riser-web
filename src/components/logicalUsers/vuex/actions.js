import v4 from 'uuid'

import { removeLogicalUser, fetchLogicalUsers, saveLogicalUser } from './api'

export const createLogicalUser = ({ commit, state }, data) => {
  let id = v4()
  let timesheet = Object.assign({ id: id }, data)
  commit('CREATE_TIMESHEET', timesheet)
  saveLogicalUser(timesheet)
    .then(value => {
      console.log('timesheet saved ' + value)
    })
    .catch(err => {
      console.log('ERROR: ' + err)
    })
}

export const updateLogicalUser = ({ commit, state }, data) => {
  commit('UPDATE_TIMESHEET', data)
  saveLogicalUser(data)
    .then(value => {
      console.log('timesheet saved ' + value)
    })
    .catch(err => {
      console.log('ERROR: ' + err)
    })
}

export const loadLogicalUsers = state => {
  console.log('Trying to load logical users....')
  if (!state.logicalUsers || Object.keys(state.logicalUsers).length === 0) {
    return fetchLogicalUsers().then(res => {
      state.commit('LOAD_LOGICAL_USERS', res)
    })
  }
}

export const deleteTimesheet = ({ commit }, data) => {
  commit('DELETE_TIMESHEET', data)
  removeLogicalUser(data)
}
