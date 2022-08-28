<script lang="ts">
  import type { CocktailType } from "../types/cocktail.type"
  import Cocktail from "./Cocktail.svelte";
  import MenuArrow from "./MenuArrow.svelte";
  export let menu: CocktailType[]
  let index = 0
  $: menuSlice = index === 0 ? menu.slice(0, 6) : menu.slice(6)
  const transitionSteps = [300, 400, 500, 600, 700, 800]
  const nextPage = () => index === 0 ? index += 1 : index
  const previousPage = () => index === 1 ? index -= 1 : index
</script>


<div class="relative grid gap-4 md:grid-cols-2 lg:grid-cols-9">
  {#if menu.length !== 0}
    <MenuArrow on:previous={previousPage} direction="left"/>
  {/if}
  {#each menuSlice as cocktail, i}
    <div class="lg:col-span-3">
      <Cocktail delay={transitionSteps[i]} cocktail={cocktail}/>
    </div>
    {:else}
    <p>loading...</p>
  {/each}
  {#if menu.length !== 0}
    <MenuArrow on:next={nextPage} direction="right"/>
  {/if}
</div>



