import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

// Containers
import Candidate from '@/containers/Candidate'

// Views
import Login from '@/views/common/Login'
import PageNotFound from '@/views/common/PageNotFound'
import Register from '@/views/common/Register'
import CandidateDashboard from '@/views/candidate/CandidateDashboard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: 'Login',
      component: {
        // eslint-disable-line
        render(c) {
          // eslint-disable-line
          return c('router-view')
        }
      },
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    },
    {
      path: '/candidate',
      name: 'Candidate',
      component: Candidate,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: CandidateDashboard
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    { path: '*', component: PageNotFound }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()
})

export default router
