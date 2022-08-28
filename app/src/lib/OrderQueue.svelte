<script lang="ts">
  import {onMount} from 'svelte'
  let orders = []

  onMount(async () => {
    const res = await fetch('http://localhost:8080/orders')
    const allOrders = await res.json()
    orders = allOrders
  })
</script>
<div>
  <p>{JSON.stringify(orders)}</p>
</div>