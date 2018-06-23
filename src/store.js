import Vue from 'vue'
import Vuex from 'vuex'
// import { default as vuex } from './vuex'
// import createLogger from 'vuex/dist/logger'

import cognitoConfig from '../config/cognito'
import CognitoAuth from 'vue-auth-cognito'

import { default as timesheets } from './components/timesheets/vuex'
// import { default as logicalUsers } from './components/logicalUsers/vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    timesheets: timesheets,
    cognito: new CognitoAuth(cognitoConfig)
  },
  strict: debug
})
