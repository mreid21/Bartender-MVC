<script lang="ts">

  import Menu from "./lib/Menu.svelte";

</script>


<main class="w-screen flex justify-center">
  
  <div class="container">
    <Menu menu={menu}/>
  </div>
</main>

<style global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>