import Vue from 'vue'
import Vuex from 'vuex'
// import { default as vuex } from './vuex'
// import createLogger from 'vuex/dist/logger'

import cognitoConfig from '../config/cognito'
import AmazonCognitoVuexModule from 'amazon-cognito-vuex-module'

import { default as timesheets } from './components/timesheets/vuex'
// import { default as logicalUsers } from './components/logicalUsers/vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    timesheets: timesheets,
    cognito: new AmazonCognitoVuexModule({
      region: 'eu-west-1',
      userPoolId: 'eu-west-1_K7tIw04Ij',
      clientId: '11f10uefa40qu2v0j2n42ovee'
    })
  },
  strict: debug
})
