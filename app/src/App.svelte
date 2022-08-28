<script lang="ts">

  import Cocktail from "./lib/Cocktail.svelte";
  import Menu from "./lib/Menu.svelte";
  let cocktail = {
    id: 1, 
    name: "Cosmic Sunset",
    price: 200,
    img: {src: 'test-cocktail.jpg', alt: ''}
  }

  const menu = [cocktail, cocktail, cocktail, cocktail, cocktail, cocktail]
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