<script lang="ts">

  import Cocktail from "./lib/Cocktail.svelte";
  let cocktail = {
    id: 1, 
    name: "Cosmic Sunset",
    price: 50,
    img: {src: 'test-cocktail.jpg', alt: ''}
  }
</script>

<main>
  <div class="grid place-items-center max-w-lg gap-8 md:grid-cols-2">
    <Cocktail cocktail={cocktail}/>
    <Cocktail cocktail={cocktail}/>
    <Cocktail cocktail={cocktail}/>
    <Cocktail cocktail={cocktail}/>
    <Cocktail cocktail={cocktail}/>
  </div>
</main>

<style global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>