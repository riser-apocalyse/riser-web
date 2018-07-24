import axios from 'axios'
import momentjs from 'moment'

import { moment } from '../../../filters'
import store from '../../../store'

const SERVER_URL = 'ss0mjd1woa.execute-api.eu-west-1.amazonaws.com/Prod'  // process.env.SERVER_URL||

axios.interceptors.request.use(async config => {
  const response = await store.dispatch('getUserSession')
  if (response && response.idToken && response.idToken.jwtToken) {
    config.headers.AccessToken = response.idToken.jwtToken
  }
  return config
})

export const saveNotification = notification => {
  notification = Object.assign({}, notification)
  notification.ts_start = moment(notification.ts_start, 'YYYY-MM-DD')
  notification.ts_end = moment(notification.ts_end, 'YYYY-MM-DD')
  let workingDays = notification.working_days
  workingDays.forEach(day => {
    if (day.editable) {
      delete day.editable
    }
    day.date = moment(day.date, 'YYYY-MM-DD')
  })
  notification.working_days = workingDays
  console.log(notification)
  let idURL = notification.id.split('-')[1]
  let url = `https://${SERVER_URL}/contract/1/notifications/${idURL}`
  delete notification.id
  return axios
    .put(url, { notification: notification })
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(res => {
      console.log('ERROR: ' + res)
    })
}

export const updateNotificationStatus = notification => {
  notification = Object.assign({}, notification)
  notification.ts_start = notification.ts_start.toJSON()
  notification.ts_end = notification.ts_end.toJSON()
  let workingDays = notification.working_days
  workingDays.forEach(day => {
    if (day.editable) {
      delete day.editable
    }
    day.date = moment(day.date).toString()
  })
  notification.working_days = workingDays
  console.log(notification)
  let idURL = notification.id.split('-')[1]
  let url = `https://${SERVER_URL}/2/2/${idURL}/riserts.fcgi`
  delete notification.id
  return axios
    .post(url, { notification: notification })
    .then(res => {
      return res.data
    })
    .catch(res => {
      console.log('ERROR: ' + res)
    })
}

export const fetchNotifications = (user, token) => {
  // return axios
  //   .get(`https://dzolhl055l.execute-api.eu-west-1.amazonaws.com/Prod/contract/1/notifications`, { user, token })
  //   .then(res => {
  //     console.log('fetching notifications...')
  //     let notifications = res.data.notifications
  //     Object.keys(notifications).forEach(index => {
  //       notifications[index].ts_start = new Date(
  //         momentjs(notifications[index].ts_start).format('YYYY-MM-DD')
  //       )
  //       notifications[index].ts_end = new Date(
  //         momentjs(notifications[index].ts_end).format('YYYY-MM-DD')
  //       )
  //     })
  //     return notifications
  //   })
  return {
      'asdfasdfasdasf': {
        'subject': 'message alert!',
        'message': 'This is a test notification',
        'from': 'jomalone',
        'date_sent': momentjs('2018-01-02').format('YYYY-MM-DD'),
        'read': true
    },
      '1234sa3': {
        'subject': 'another message alert!',
        'message': 'This is another test notification',
        'from': 'chuckNorris',
        'date_sent': momentjs('2018-01-03').format('YYYY-MM-DD'),
        'read': true
    }
  }
}

export const removeNotification = notification => {
  console.log(notification.id)
  return axios
    .delete('https://localhost:7000/api/notifications/' + notification.id)
    .then(res => {
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })
}
