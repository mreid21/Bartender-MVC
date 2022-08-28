<script lang="ts">
  import type { CocktailType } from "../types/cocktail.type"
  import Cocktail from "./Cocktail.svelte";

  import MenuArrow from "./MenuArrow.svelte";
  export let menu: CocktailType[]
  let index = 0
  $: menuSlice = index === 0 ? menu.slice(0, 6) : menu.slice(6)

  const nextPage = () => index === 0 ? index += 1 : index
  const previousPage = () => index === 1 ? index -= 1 : index
</script>


<div class="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
  <!--make this an arrow component-->
  <MenuArrow on:previous={previousPage} direction="left"/>
  <div class="lg:col-span-6">
    <Cocktail cocktail={menuSlice[0]}/>
  </div>
  <div class="lg:col-span-3">
    <Cocktail cocktail={menuSlice[1]}/>
  </div>
  <div class="lg:col-span-3">
    <Cocktail cocktail={menuSlice[2]}/>
  </div>
  <div class="lg:col-span-4">
    <Cocktail cocktail={menuSlice[3]}/>
  </div>
  <div class="lg:col-span-4">
    <Cocktail cocktail={menuSlice[4]}/>
  </div>
  <div class="lg:col-span-4">
    <Cocktail cocktail={menuSlice[5]}/>
  </div>
  <MenuArrow on:next={nextPage} direction="right"/>
</div>


