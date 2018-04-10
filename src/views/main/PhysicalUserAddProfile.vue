<template>
  <div>
    <AddLogicalUser />
    <router-view></router-view>
  </div>
</template>

<script>

import { AddLogicalUser } from '../../components/logicalUsers'

export default {
  name: 'add-user-profile',
  components: {
    AddLogicalUser
    }
}
</script>
