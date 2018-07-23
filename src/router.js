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
import CandidateContracts from '@/views/candidate/CandidateContracts'
import CandidateContract from '@/views/candidate/CandidateContract'
import CandidateTimesheets from '@/views/candidate/CandidateTimesheets'
import CandidateNotifications from '@/views/candidate/CandidateNotifications'
import CandidateNotification from '@/views/candidate/CandidateNotification'
import CandidateProfile from '@/views/candidate/CandidateProfile'
import CandidateJobs from '@/views/candidate/CandidateJobs'
import CandidateInvoices from '@/views/candidate/CandidateInvoices'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'open active',
  mode: 'history',
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
          path: 'contracts',
          name: 'candidate-contracts',
          component: CandidateContracts
        },
        {
          path: 'contracts/:id',
          name: 'candidate-contract',
          component: CandidateContract,
          children: [
            {
              path: 'timesheets',
              name: 'candidate-timesheets-last',
              component: CandidateTimesheets
            },
            {
              path: 'timesheets/:id',
              name: 'candidate-timesheet-last',
              component: CandidateTimesheet
            }
          ]
        },
        {
          path: 'timesheets',
          name: 'candidate-timesheets-latest',
          component: CandidateTimesheets
        },
        {
          path: 'timesheet/:id',
          name: 'candidate-timesheet',
          component: CandidateTimesheet
        },
        {
          path: 'notifications',
          name: 'candidate-notifications',
          component: CandidateNotifications
        },
        {
          path: 'notifications/:id',
          name: 'candidate-notification',
          component: CandidateNotification
        },
        {
          path: 'profile',
          name: 'candidate-profile',
          component: CandidateProfile
        },
        {
          path: 'jobs',
          name: 'candidate-jobs',
          component: CandidateJobs
        },
        {
          path: 'invoices',
          name: 'candidate-invoices',
          component: CandidateInvoices
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
