<script lang="ts">

  import Cocktail from "./lib/Cocktail.svelte";
  let cocktail = {
    id: 1, 
    name: "Cosmic Sunset",
    price: 50,
    img: {src: 'test-cocktail.jpg', alt: ''}
  }
</script>

<main class="w-screen flex justify-center">
  <div class="container">
    <div class="p-8 border-2 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      <div class="lg:col-span-6">
        <Cocktail cocktail={cocktail}/>
      </div>
      <div class="lg:col-span-3">
        <Cocktail cocktail={cocktail}/>
      </div>
      <div class="lg:col-span-3">
        <Cocktail cocktail={cocktail}/>
      </div>
      <div class="lg:col-span-4">
        <Cocktail cocktail={cocktail}/>
      </div>
      <div class="lg:col-span-4">
        <Cocktail cocktail={cocktail}/>
      </div>
      <div class="lg:col-span-4">
        <Cocktail cocktail={cocktail}/>
      </div>
      

      
    </div>
  </div>
</main>

<style global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>