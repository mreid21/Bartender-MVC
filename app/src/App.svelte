<script lang="ts">
  import Menu from "./lib/Menu.svelte";
  import './app.css'
  import {onMount} from 'svelte'

  let menu = []

  onMount(async () => {
    const res = await fetch('http://localhost:8080/cocktails')
    menu = await res.json()
  })

</script>


<main class="w-screen flex justify-center">
  <div class="container overflow-hidden">
    <Menu menu={menu}/>
  </div>
</main>