<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main class="h-screen w-screen flex justify-center items-center">
  <Counter/>
</main>

<style global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>