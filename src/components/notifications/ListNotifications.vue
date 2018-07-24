<template>
  <div>
    <h1>Notifications</h1>
    <BoxNotification
      v-bind:key="key"
      v-for="notification, key in notifications"
      :subject="notification.subject"
      :date_sent="notification.date_sent"
      :from="notification.from"
      :message="notification.message"
      :id="key"
      v-bind:read="notification.read"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoxNotification from './BoxNotification.vue'

export default {
  name: 'list-notifications',
  components: {
    BoxNotification
  },
  mounted () {
    this.loadNotifications()
  },
  methods: {
    ...mapActions([
      'loadNotifications'
    ])
  },
  computed: {
    ...mapState({
      'notifications': state => state.notifications.notifications
    })
  }
}
</script>
