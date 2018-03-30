import Vue from 'vue'

export default {
  CREATE_LOGICAL_USER (state, logicalUser) {
    state.logicalUsers[logicalUser.id] = logicalUser
  },

  UPDATE_LOGICAL_USER (state, data) {
    state.logicalUsers[data.tsId] = data.logicalUser
  },

  LOAD_LOGICAL_USERS (state, payload) {
    state.logicalUsers = payload
  },

  DELETE_LOGICAL_USER (state, logicalUser) {
    let index = state.logicalUsers.indexOf(logicalUser)
    Vue.delete(state.logicalUsers, index)
  }
}
