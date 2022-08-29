<script lang="ts">
  import {user} from '../store/store'
  import {onMount} from 'svelte'
  let orders = []
  let token = ''
  user.subscribe((value) => {
    token = value.token
  })

  onMount(async () => {
    const res = await fetch('http://localhost:8080/orders', {
      headers: {'Authorization': 'Bearer-Token ' + token}
    })
    const allOrders = await res.json()
    orders = allOrders
  })
</script>
<div>
  <p>{JSON.stringify(orders)}</p>
</div>