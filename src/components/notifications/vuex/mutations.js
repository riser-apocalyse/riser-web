import Vue from 'vue'

export default {
  CREATE_NOTIFICATION (state, notification) {
    state.notifications[notification.id] = notification
  },

  UPDATE_NOTIFICATION (state, data) {
    state.notifications[data.tsId] = data.notification
  },

  LOAD_NOTIFICATIONS (state, payload) {
    state.notifications = payload
  },

  DELETE_NOTIFICATION (state, notification) {
    let index = state.notifications.indexOf(notification)
    Vue.delete(state.notifications, index)
  }
}
