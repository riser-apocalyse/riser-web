import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Candidate from '@/containers/Candidate'

// Views
import Login from '@/views/common/Login'
import PageNotFound from '@/views/common/PageNotFound'
import Register from '@/views/common/Register'
import CandidateDashboard from '@/views/candidate/CandidateDashboard'
import CandidateTimesheet from '@/views/candidate/CandidateTimesheet'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '',
      redirect: 'login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: Candidate,
      children: [
        {
          path: 'dashboard',
          name: 'candidate-dashboard',
          component: CandidateDashboard
        },
        {
          path: 'timesheet/:id',
          name: 'candidate-timesheet',
          component: CandidateTimesheet
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    { path: '*', component: PageNotFound }
  ]
})

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//
//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('candidate/dashboard')
//   else next()
// })

export default router
