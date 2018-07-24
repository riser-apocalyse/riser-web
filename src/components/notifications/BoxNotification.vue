<template>
  <div class="card">
    <div class="card-header">{{ subject || 'No Subject' }}</div>
    <ul class="list-group list-group-flush">
    <router-link :to="{ name: 'candidate-timesheet', params: { id: id } }" style="text-decoration:none">
      <li class="list-group-item" v-bind:class="get_status(read)">
        <p>From: {{ from }}</p>
        <p>Message:</p>
        <p>{{ message }}</p>
        <p>Date sent: {{ date_sent | moment }}</p>
      </li>
    </router-link>
    </ul>
  </div>
</template>

<script>
import { moment } from '../../filters'

export default {
  name: 'box-notification',
  props: ['subject', 'read', 'from', 'message', 'date_sent', 'id'],
  filters: {
    moment
  },
  methods: {
    get_status (status) {
      if (status) {
        return 'message-read'
      } else {
        return 'bg-secondary'
      }
    }
  }
}
</script>
<style>
  .message-read {
    background-color: ghostwhite;
  }
</style>
