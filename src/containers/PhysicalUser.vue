<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav" />
      <main class="main">
        <breadcrumb :list="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
//import { mapState } from 'vuex'
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '../components/'

export default {
  name: 'physical-user',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  computed: {
//    ...mapState({
//      'logicalUsers': state => state.logicalUsers.logicalUsers
//    }),
    name: function () { return this.$route.name },
    list: function () { return this.$route.matched },
    nav: function () { return this.get_nav() }
  },
  methods: {
    get_nav () {
//      let children = this.logicalUsers.map(user => { return { name: user.alias } })
      return [
        {
          name: 'Profiles',
          url: '/main/dashboard/profiles',
          icon: 'icon-speedometer'
//          children: children
        },
        {
          name: 'Settings',
          url: '/main/dashboard/settings',
          icon: 'icon-speedometer'
        }
      ]
    }
  }
}
</script>
