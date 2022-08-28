<script lang="ts">

  import Cocktail from "./lib/Cocktail.svelte";
  import Menu from "./lib/Menu.svelte";
  let menu = [
    {
      id: 1, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 2, 
      name: "Super Screwdriver",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 3, 
      name: "Crazy Twist",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 4, 
      name: "Lost in Space-Time",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 5, 
      name: "Everything and Nothing",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 6, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 7, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 8, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 9, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 10, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 11, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },
    {
      id: 12, 
      name: "Cosmic Sunset",
      price: 200,
      img: {src: 'test-cocktail.jpg', alt: ''}
    },


  ]
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