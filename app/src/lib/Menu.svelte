<script lang="ts">
  import type { CocktailType } from "../types/cocktail.type"
  import Cocktail from "./Cocktail.svelte";

  import MenuArrow from "./MenuArrow.svelte";
  export let menu: CocktailType[]
  const gridChildren = [6, 3, 3, 4, 4, 4]


</script>


<div class="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
  <!--make this an arrow component-->
  <MenuArrow direction="left"/>
  {#each menu as cocktail, i}
    <div class="{`lg:col-span-${gridChildren[i]}`}">
      <Cocktail cocktail={cocktail}/>
    </div>
  {/each}
  <MenuArrow direction="right"/>
  
</div>

