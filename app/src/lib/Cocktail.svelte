<script lang="ts">
  import {fly} from 'svelte/transition'
  import {cartItems} from '../store/store'
  import type { CocktailType } from "../types/cocktail.type"
  import { navigateTo } from 'svelte-router-spa';


  export let cocktail: CocktailType
  export let delay: number

  const addCocktail = () => {
    cartItems.update(cartData => [...cartData, cocktail])
    navigateTo('/checkout')
  }
</script>

{#key cocktail}
  <div in:fly={{y: 200, duration: 1000, delay}} 
       class="p-2 h-96 bg-center bg-cover rounded-md overflow-hidden" 
       style="{`background-image: url(./images/${cocktail.img.src})`}"
  >
    <div class="w-full h-full flex flex-col justify-between">
      <p class="text-white text-xl">{cocktail.name}</p>
      <button on:click={addCocktail} class="text-white button-36 self-end">Buy: {cocktail.price}</button>
    </div>
  </div>
{/key}


