<template>
  <div>
    <h1>Your profile</h1>
    <Profile />
  </div>
</template>

<script>
  import { Profile } from '../../components/profile'

  export default {
    name: 'candidate-profile',
    components: {
      Profile
    }
  }
</script>
