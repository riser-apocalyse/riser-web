import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Candidate from '@/containers/Candidate'
import PhysicalUser from '@/containers/Physicaluser'

// Views
import Login from '@/views/common/Login'
import PageNotFound from '@/views/common/PageNotFound'
import Register from '@/views/common/Register'
import CandidateDashboard from '@/views/candidate/CandidateDashboard'
import CandidateTimesheet from '@/views/candidate/CandidateTimesheet'
import PhysicalUserListProfiles from '@/views/main/PhysicalUserListProfiles'
import PhysicalUserAddProfile from '@/views/main/PhysicalUserAddProfile'
import DetailsCandidateForm from '@/components/logicalUsers/details/DetailsCandidateForm'
import DetailsCompanyForm from '@/components/logicalUsers/details/DetailsCompanyForm'
import DetailsRecruiterForm from '@/components/logicalUsers/details/DetailsRecruiterForm'

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
      path: '/main',
      name: 'main',
      component: PhysicalUser,
      redirect: '/main/users',
      children: [
        {
          path: 'users',
          name: 'main-list-users',
          component: PhysicalUserListProfiles
        },
        {
          path: 'users/add',
          name: 'createLogicalUser',
          component: PhysicalUserAddProfile,
          children: [
            {
              path: 'company',
              name: 'createCompanyUser',
              component: DetailsCompanyForm
            },
            {
              path: 'recruiter',
              name: 'createRecruiterUser',
              component: DetailsRecruiterForm
            },
            {
              path: 'candidate',
              name: 'createCandidateUser',
              component: DetailsCandidateForm
            }
          ]
        },
        {
          path: 'settings',
          name: 'main-settings',
          component: PhysicalUserListProfiles // change this for a view to settings later on
        }
      ],
      meta: {
        requiresAuth: true
      }
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
