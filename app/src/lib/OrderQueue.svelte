<script lang="ts">
  import {user} from '../store/store'
  import {onMount} from 'svelte'
  import Order from './Order.svelte'
  import { navigateTo } from 'svelte-router-spa';
  
  let orders = []
  let token = ''
  user.subscribe((value) => {
    token = value.token
    console.log(token)
  })

  onMount(async () => {
    const res = await fetch('http://localhost:8080/orders', {
      headers: {'Authorization': 'Bearer-Token ' + token}
    })

    if(res.ok){
      const allOrders = await res.json()
      orders = allOrders
    }
    else {
      localStorage.clear()
      user.set({username: '', token: ''})
      navigateTo('/')
    }
  })

  const removeOrder = async (event) => {
    const id = event.detail

    const res = await fetch(`http://localhost:8080/orders/${id}`, {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer-Token ' + token}
    })

    if(res.status === 203){
      orders = orders.filter(order => order.id !== id)
    }
    

  }

  
</script>

<div class="w-screen flex justify-center">
  <div class="w-full lg:w-1/2 shadow-md p-4">
    <h1 class="mb-2">Pending Orders</h1>
    <ul class="mb-8">
      <li class="list-style-none w-full flex flex-col gap-8">
        {#each orders as order}
          <Order on:complete={removeOrder} id={order.id} items={order.items} total={order.total} orderedAt={order.orderedAt} />
        {/each}
      </li>
    </ul>
  </div>
</div>