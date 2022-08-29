 <script lang="ts">

  import { createEventDispatcher } from 'svelte';

  export let id: number
  export let total: number
  export let orderedAt: string
  export let items

  $: asDate = new Date(orderedAt)
  $: time = formatTime(asDate.toLocaleTimeString().split(':'))

  //prettify datetime object
  const formatTime = (time: string[]): string =>  {
    const timeOfDay = time[2].split(' ')[1]
    const clockTime = time.slice(0, 2).join(':')
    return `${clockTime} ${timeOfDay}`
  }

  const dispatch = createEventDispatcher()
  const completeOrder = () => dispatch('complete', id)

 </script>
 <!--Order-->
 <div class="w-full border py-4">
  <!--Header-->
  <div class="flex mb-2 justify-between items-center">
    <p class="ml-8 lg:mr-16">#{id}</p>
    <!--use actual time-->
    <p class="mr-8 lg:mr-16">{time}</p>
  </div>
  <!--End Header-->

  <!--Summary-->
  <div class="lg:mx-8">
    <p class="mb-4 ml-8 lg:ml-0 font-semibold">Order summary:</p>
    <!--Items-->
    <ul class="mx-8 border-b mb-2">
      {#each items as item}
        <li class="flex justify-between items-center mb-4">
          <div class="flex gap-4 items-center">
            <div class="w-16 h-16">
              <img class="rounded-md h-full w-full object-cover" src={`/images/${item.cocktail.img.src}`} alt="test">
            </div>
            <span class="font-semibold">{item.cocktail.name}</span>
          </div>
          <span class="block">{item.quantity}</span>
        </li>
      {/each}
      
    </ul>
    <!--End Items-->
    <!--Footer-->
    <div class="mx-8 flex justify-between">
      <p>Total: </p>
      <p class="font-bold">${total}</p>
    </div>
    <div class="flex mt-4 mx-4 justify-end">
      <button on:click={completeOrder} class="inline-block text-white bg-green-600 font-semibold px-4 py-2 border rounded-lg hover:bg-green-700 transition">Complete</button>
    </div>
    
  </div>
  <!--End Summary-->
</div>
<!--End Order-->