<script lang="ts">

  import Cocktail from "./lib/Cocktail.svelte";

</script>

<main class="h-screen w-screen flex justify-center items-center">
  <Cocktail cocktail={{id: 1, name: "Cosmic Sunset", price: 50, img: {src: 'test-cocktail.jpg', alt: ''}}}/>
</main>

<style global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>