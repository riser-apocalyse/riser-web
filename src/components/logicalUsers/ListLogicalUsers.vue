<template>
  <div>
    <h1 style="margin-bottom:30px;">list logical users</h1>
    <h3 class="btn btn-success" style="float:right; margin-right:10%;">Add a new user</h3>
    <BoxLogicalUser
      v-for="user in logicalUsers"
      v-bind:key="user.id"
      :alias="user.alias"
      :access="user.access"
      :id="user.id"
      :userType="user.user_type"
      v-bind:userType="user.user_type"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoxLogicalUser from './BoxLogicalUser.vue'

export default {
  name: 'list-logical-users',
  components: {
    BoxLogicalUser
  },
  mounted () {
    this.loadLogicalUsers()
  },
  methods: {
    ...mapActions([
      'loadLogicalUsers'
    ])
  },
  computed: {
    ...mapState({
      'logicalUsers': state => state.logicalUsers.logicalUsers
    })
  }
}
</script>
