<template>
  <div>
    <h1>Your contracts, present and past</h1>
    <ListContracts />
  </div>
</template>

<script>
  import { ListContracts } from '../../components/contracts'

  export default {
    name: 'candidate-contracts',
    components: {
      ListContracts
    }
  }
</script>
