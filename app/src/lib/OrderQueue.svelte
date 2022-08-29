<script lang="ts">
  import {user, cartItems} from '../store/store'
  import {onMount} from 'svelte'
  import Order from './Order.svelte'
  import { Navigate, navigateTo } from 'svelte-router-spa';
  
  let orders = []
  let token = ''
  user.subscribe((value) => {
    token = value.token
  })

  onMount(async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders`, {
      headers: {'Authorization': 'Bearer-Token ' + token}
    })

    if(res.ok){
      const allOrders = await res.json()
      orders = allOrders
    }
    else {
      user.set({username: '', token: ''})
      navigateTo('/')
    }
  })

  const removeOrder = async (event) => {
    const id = event.detail

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${id}`, {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer-Token ' + token}
    })

    if(res.status === 203){
      orders = orders.filter(order => order.id !== id)
    }
    
  }

  const logout = () => {
    localStorage.clear()
    user.set({token: '', username: ''})
    cartItems.update(() => [])
    navigateTo('/')
  }

  
</script>

<div class="w-screen flex justify-center">
  <div class="w-full lg:w-1/2 shadow-md p-8 mt-10">
    {#if orders.length > 0}
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-semibold text-slate-800">Pending Orders</h1>
        <div>
          <span class="mr-2 underline cursor-pointer"><Navigate to="/">Home</Navigate></span>
          <button on:click={logout} class="inline-block px-4 py-2 border rounded-lg hover:bg-slate-600 hover:text-white transition">Logout</button>
        </div>
      </div>
    {/if}
    <ul class="mb-4">
      <li class="list-style-none w-full flex flex-col gap-8">
        {#each orders as order}
          <Order on:complete={removeOrder} id={order.id} items={order.items} total={order.total} orderedAt={order.orderedAt} />
          {:else}
          <p class="w-full text-center text-xl">No orders right now <span class="ml-2 underline text-md text-blue-400"><Navigate to="/">Go Home</Navigate></span></p>
        {/each}
      </li>
    </ul>
  </div>
</div>