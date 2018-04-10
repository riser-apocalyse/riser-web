<template>
  <div>
    <h1 style="margin-bottom:30px;">Your registered users</h1>
    <button block class="btn btn-success" style="margin-bottom:2%; margin-left:22%; min-width:185px;">
      <i style="font-size:25px;" class="fa fa-plus-circle"></i>
      <p style="font-size:20px; float:right; margin-left:5px;">
        <router-link :to="{ name: 'createLogicalUser' }" style="text-decoration: none; color:inherit;">Add New User</router-link>
      </p>
    </button>
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
