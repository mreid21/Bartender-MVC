<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type Direction = 'left' | 'right'
  export let direction: Direction;

  let show: boolean = false
  const dispatch = createEventDispatcher()

  const handleMouseOver = (e) => {
    show = true
  }

  const handleMouseLeave = (e) => {
    show = false
  }

  const navigate = () => (direction === 'left') ? dispatch('previous') : dispatch('next')
  
</script>
<span on:mouseover={handleMouseOver}
      on:mouseleave={handleMouseLeave}
      on:focus={handleMouseOver}
      on:blur={handleMouseLeave}
      on:click={navigate}
      class="{`block flex items-center justify-center absolute h-full w-16 ${direction === 'left' ? 'left' : 'right' }-0 ${direction === 'left' ? 'left' : 'right' }`}"
>
  {#if show}
    {#if direction === 'left'}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    {/if}
  {/if}
</span>

<style>
  svg path {
    fill: white;
  }
  .right:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.05s ease-in-out;
  }

  .left:hover {
    box-shadow: 100px 0px 10px 1px rgba(0,0,0,0.5) inset;
    transition: 0.05s ease-in-out;
  }
</style>