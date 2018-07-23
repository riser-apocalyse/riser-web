<template>
  <div>
    <h1>Your job search</h1>
    <ListJobs />
  </div>
</template>

<script>
  import { ListJobs } from '../../components/jobs'

  export default {
    name: 'candidate-jobs',
    components: {
      ListJobs
    }
  }
</script>
