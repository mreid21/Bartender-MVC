<script lang="ts">
  import {fly} from 'svelte/transition'
  import type { CocktailType } from "../types/cocktail.type"
  export let cocktail: CocktailType
  export let delay: number
</script>

{#key cocktail}
  <div in:fly={{y: 200, duration: 1000, delay}} 
       class="p-2 h-96 bg-center bg-cover rounded-md overflow-hidden" 
       style="{`background-image: url(./images/${cocktail.img.src})`}"
  >
    <div class="w-full h-full flex flex-col justify-between">
      <p class="text-white text-xl">{cocktail.name}</p>
      <button class="text-white button-36 self-end">Buy: {cocktail.price}</button>
    </div>
  </div>
{/key}

<style>

/* CSS */


/* CSS */
.button-36 {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 2.5rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}
</style>
