import v4 from 'uuid'

import { removeNotification, fetchNotifications, saveNotification } from './api'

export const createNotification = ({ commit, state }, data) => {
  let id = v4()
  let notification = Object.assign({ id: id }, data)
  commit('CREATE_NOTIFICATION', notification)
  saveNotification(notification)
    .then(value => {
      console.log('notification saved ' + value)
    })
    .catch(err => {
      console.log('ERROR: ' + err)
    })
}

export const updateNotification = ({ commit, state }, data) => {
  commit('UPDATE_NOTIFICATION', data)
  saveNotification(data)
    .then(value => {
      console.log('notification saved ' + value)
    })
    .catch(err => {
      console.log('ERROR: ' + err)
    })
}

export const loadNotifications = state => {
  console.log('Trying to load notifications....')
  if (!state.notifications || Object.keys(state.notifications).length === 0) {
    let notifications = fetchNotifications()
    state.commit('LOAD_NOTIFICATIONS', notifications)
    // return fetchNotifications().then(res => {
    //   state.commit('LOAD_NOTIFICATIONS', res)
    // })
  }
}

export const deleteNotification = ({ commit }, data) => {
  commit('DELETE_NOTIFICATION', data)
  removeNotification(data)
}

export default {
  createNotification,
  updateNotification,
  loadNotifications,
  deleteNotification
}
