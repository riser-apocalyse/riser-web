<template>
  <div>
    <h1>Candidate Timesheet detail</h1>
    <DetailsTimeSheet />
  </div>
</template>

<script>

import { DetailsTimeSheet } from '../../components/timesheets';

export default {
  name: 'candidate-timesheet',
  components: {
    DetailsTimeSheet
    }
}
</script>
