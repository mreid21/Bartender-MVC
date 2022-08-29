<script lang="ts">
  import type { CocktailOrderType } from "src/types/cocktail.type";
  import {createEventDispatcher} from 'svelte'
  import {fade} from 'svelte/transition'

  export let item: CocktailOrderType

  const dispatch = createEventDispatcher()
  
  const removeItem = () => dispatch('remove', item.cocktail.id)

  const reduceQuantity = () => dispatch('reduce', item.cocktail.id)

  const increaseQuantity = () => dispatch('increase', item.cocktail)

</script>
<section in:fade={{duration: 500, delay: 200}} class="flex gap-4 flex-start w-full p-4 h-48  h-48 border-b-2">
  <div class="w-32 basis-1/2 lg:basis-1/4">
    <img class="w-full h-full object-cover" src={`./images/${item.cocktail.img.src}`} alt="">
  </div>
  <div class="flex justify-between basis-full">
    <div class="flex flex-col justify-between">
      <div>
        <span>#{item.cocktail.id}</span>
        <p class="text-lg font-bold">{item.cocktail.name}</p>
      </div>
      <div>
        <span on:click={removeItem} class="underline">remove</span>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <p class="text-lg font-bold">${item.cocktail.price * item.quantity}</p>
      <div class="flex items-center gap-2">
        <button on:click={reduceQuantity} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-8 cursor-pointer">
          <span class="m-auto text-2xl font-thin">-</span>
        </button>
        <span>{item.quantity}</span>
        <button on:click={increaseQuantity} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-8 cursor-pointer">
          <span class="m-auto text-xl font-thin">+</span>
        </button>
      </div>
    </div>
  </div>
</section>