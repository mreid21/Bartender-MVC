<script lang="ts">
  import type { CocktailOrderType } from "src/types/cocktail.type";
  import {fade} from 'svelte/transition'
  export let item: CocktailOrderType
</script>
<section in:fade={{duration: 500, delay: 200}} class="flex gap-4 flex-start w-full p-4 h-48  h-48 border-b-2">
  <div class="w-32 basis-1/2 lg:basis-1/4">
    <img class="rounded-sm w-full h-full object-cover" src={`../../public/images/${item.cocktail.img.src}`} alt={item.cocktail.img.src}>
  </div>
  <div class="flex justify-between basis-full">
    <div class="flex flex-col justify-between">
      <div>
        <span>#{item.cocktail.id}</span>
        <p class="text-lg font-bold">{item.cocktail.name}</p>
      </div>
      <div>
        <span class="underline">remove</span>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <p class="text-lg font-bold">${item.cocktail.price}</p>
      <div class="flex items-center gap-2">
        <button class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-8 cursor-pointer">
          <span class="m-auto text-2xl font-thin">-</span>
        </button>
        <span>{item.quantity}</span>
        <button class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-8 cursor-pointer">
          <span class="m-auto text-xl font-thin">+</span>
        </button>
      </div>
    </div>
  </div>
</section>