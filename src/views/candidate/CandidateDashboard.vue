<template>
  <div>
    <h1>Summary of activity</h1>
    <ListTimeSheets />
  </div>
</template>

<script>
import { ListTimeSheets } from '../../components/timesheets'

export default {
  name: 'candidate-dashboard',
  components: {
    ListTimeSheets
  }
}
</script>


