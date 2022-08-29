<script lang="ts">
  import Menu from "./Menu.svelte";
  import '../app.css'
  import {onMount} from 'svelte'
  import {user} from '../store/store'
import { Navigate, navigateTo } from "svelte-router-spa";
  let menu = []
  let username = ''

  user.subscribe((value) => {
    value.username ? username = value.username : username = ''
  })

  onMount(async () => {
    const token = localStorage.getItem('auth')
    const username = localStorage.getItem('username')

    if(token && username){
      user.set({token, username})
    }
    const res = await fetch('http://localhost:8080/cocktails')
    menu = await res.json()
  })

  const logout = () => {
    if(username !== ''){
      localStorage.clear()
      user.set({token: '', username: ''})
    }
  }

  const goToOrders = () => {
    navigateTo(`/employees/${username}/orders`)
  }

</script>


<main class="w-screen flex justify-center">
  <div class="container overflow-hidden py-4 px-2">
    <h1 class="text-4xl text-slate-800 font-bold">The Intergalactic Lounge</h1>
    <div class="flex w-full justify-end mb-4">
      {#if username !== ''}
        <div class="flex gap-4 items-center">
          <span class="font-semibold">{username}</span>
          <button on:click={goToOrders} class="button-36">Orders</button>
          <button on:click={logout} class="inline-block px-4 py-2 mr-2 border rounded-lg hover:bg-slate-600 hover:text-white transition">Logout</button>
          
        </div>

        {:else}
        <span class="inline-block px-4 py-2 mr-2 border rounded-lg hover:bg-slate-600 hover:text-white transition"><Navigate to="/login">Employee Login</Navigate></span>
      {/if}
    </div>
    <Menu menu={menu}/>
  </div>
</main>