<template>
  <div>
    <h1>Your registered Profiles</h1>
    <ListLogicalUsers />
  </div>
</template>

<script>

import { ListLogicalUsers } from '../../components/logicalUsers'

export default {
  name: 'physical-user-profiles',
  components: {
    ListLogicalUsers
    }
}
</script>
