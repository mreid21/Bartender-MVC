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
  <div class="container overflow-hidden">
    <Menu menu={menu}/>
    <p>
      <Navigate to="/login">take me to login: </Navigate>
    </p>
  </div>
</main>