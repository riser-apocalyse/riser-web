<template>
  <div>
    <h1>Invoice</h1>
    <DetailsInvoice />
  </div>
</template>

<script>
  import { DetailsInvoice } from '../../components/invoices'

  export default {
    name: 'candidate-invoice',
    components: {
      DetailsInvoice
    }
  }
</script>
