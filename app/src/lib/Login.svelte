<script lang="ts">
  import jwt_decode from "jwt-decode";
  import type { DecodedToken } from "src/types/auth.type";
  import { navigateTo } from 'svelte-router-spa';
  import {user} from '../store/store'

  let username = ''
  let password = ''
  let token = ''
  let promise = Promise.resolve('')

  user.subscribe((value) => {
    token = value.token
  })

  $: if (token !== '') {

    const {username}: DecodedToken = jwt_decode(token)
    user.set({token, username})
    localStorage.setItem('auth', token)
    localStorage.setItem('username', username)
    navigateTo(`employees/${username}/orders`)
  }

  function handleClick() {
    promise = login()
  }

  function cancel() {
    navigateTo('/')
  }

  async function login() {

    if(username === '' || password === '') throw new Error('Please fill out all fields')

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${username}/${password}`)
    const auth = await res.json()

    if(res.ok && auth.token) {
      token = auth.token
      return token
    }
    else {
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
    <div class="flex w-full flex-col gap-2">
      <button on:click={handleClick} class="button-36">sign in</button>
      <button on:click={cancel} class="inline-block font-semibold px-4 py-2 border rounded-lg hover:bg-slate-600 hover:text-white transition">Cancel</button>
    </div>
  </div>
</section>