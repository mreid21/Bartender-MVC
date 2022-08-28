<script lang="ts">
  import Menu from "./Menu.svelte";
  import '../app.css'
  import {onMount} from 'svelte'
  import { Navigate } from 'svelte-router-spa'
  let menu = []

  onMount(async () => {
    const res = await fetch('http://localhost:8080/cocktails')
    menu = await res.json()
  })

</script>


<main class="w-screen flex justify-center">
  <div class="container overflow-hidden py-4 px-2">
    <div class="flex w-full justify-end mb-4">
      <span class="inline-block px-4 py-2 mr-2 border rounded-lg hover:bg-slate-600 hover:text-white transition">
        <Navigate to="/login">Employee Login</Navigate>
      </span>
    </div>
    <Menu menu={menu}/>
  </div>
</main>