<script lang="ts">
import { navigateTo } from 'svelte-router-spa';

  import {user} from '../store/store'

  let username = ''
  let password = ''
  let token = ''
  let promise = Promise.resolve('')

  $: if (token !== '') {
    user.set({token})
    navigateTo('/user/orders')
  }

  function handleClick() {
    promise = login()
  }

  async function login() {

    if(username === '' || password === '') throw new Error('Please fill out all fields')

    const res = await fetch(`http://localhost:8080/users/${username}/${password}`)
    const auth = await res.json()

    if(auth && auth.token) {
      token = auth.token
      return token
    }
    if(res.status === 404) {
      throw new Error('User not found')
    }
  
    if(res.status === 401){
      throw new Error('Invalid login credentials')
    }
  }

  

</script>
<section class="w-screen h-screen flex justify-center items-center">
  <div class="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 flex flex-col w-96 lg:w-1/4">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input bind:value={username} class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input bind:value={password} class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
      {#await promise}
        <p class="text-sm">Logging you in...</p>
      {:then token}
        {#if token}
          <p class="text-green-500 text-sm">Successfully logged in.</p>
        {/if}
      {:catch error}
        <p class="text-sm text-red-500">{error.message}</p>
      {/await}
    </div>
    <div class="flex items-center justify-between">
      <button on:click={handleClick} class="bg-blue-500 text-white text-sm capitalize font-bold py-2 px-4 rounded">sign in</button>
    </div>
  </div>
</section>