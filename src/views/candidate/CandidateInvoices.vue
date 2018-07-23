<template>
  <div>
    <h1>Your invoices</h1>
    <ListInvoices />
  </div>
</template>

<script>
  import { ListInvoices } from '../../components/invoices'

  export default {
    name: 'candidate-invoices',
    components: {
      ListInvoices
    }
  }
</script>
