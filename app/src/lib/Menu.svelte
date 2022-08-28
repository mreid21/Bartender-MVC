<script lang="ts">
  import type { CocktailType } from "../types/cocktail.type"
  import Cocktail from "./Cocktail.svelte";

  import MenuArrow from "./MenuArrow.svelte";
  export let menu: CocktailType[]
  let index = 0
  $: menuSlice = index === 0 ? menu.slice(0, 6) : menu.slice(6)
  const gridChildren = [6, 3, 3, 4, 4, 4]

  const nextPage = () => index === 0 ? index += 1 : index
  const previousPage = () => index === 1 ? index -= 1 : index
  
</script>


<div class="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
  <!--make this an arrow component-->
  <MenuArrow on:previous={previousPage} direction="left"/>
  {#each menuSlice as cocktail, i}
    <div class="{`lg:col-span-${gridChildren[i]}`}">
      <Cocktail cocktail={cocktail}/>
    </div>
  {/each}
  <MenuArrow on:next={nextPage} direction="right"/>
  
</div>

