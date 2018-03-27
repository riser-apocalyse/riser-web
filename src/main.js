// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import router from './router'
import config from './config'
import store from './store'
import VeeValidate from 'vee-validate'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)

let app

// firebase.initializeApp(config)
// firebase.auth().onAuthStateChanged(function(user) {
if (!app) {
  /* eslint-disable no-new */
  app = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
      App
    }
  })
}
// })
