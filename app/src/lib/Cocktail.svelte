<script lang="ts">
  import type { CocktailType } from "../types/cocktail.type"
  export let cocktail: CocktailType
</script>

<div class="w-48 h-64 bg-center bg-cover" style="{`background-image: url(./images/${cocktail.img.src})`}">
  <div>
    <p class="text-white">{cocktail.name}</p>
    <p class="text-white">{cocktail.price}</p>
  </div>
</div>

<style>

</style>
