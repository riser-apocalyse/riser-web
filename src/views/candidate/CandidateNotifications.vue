<template>
  <div>
    <h1>Your Notifications</h1>
    <ListNotifications />
  </div>
</template>

<script>
  import { ListNotifications } from '../../components/notifications'

  export default {
    name: 'candidate-notifications',
    components: {
      ListNotifications
    }
  }
</script>
