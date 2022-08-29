 <script lang="ts">
  export let id: number
  export let total: number
  export let orderedAt: string
  export let items

  $: asDate = new Date(orderedAt)
  $: time = formatTime(asDate.toLocaleTimeString().split(':'))

  const formatTime = (time: string[]): string =>  {
    const timeOfDay = time[2].split(' ')[1]
    const clockTime = time.slice(0, 2).join(':')
    return `${clockTime} ${timeOfDay}`
  }

 </script>
 <!--Order-->
 <div class="w-full border-b py-4">
  <!--Header-->
  <div class="flex justify-between items-center">
    <p>#{id}</p>
    <!--use actual time-->
    <p class="mr-8 lg:mr-16">{time}</p>
  </div>
  <!--End Header-->

  <!--Summary-->
  <div class="lg:mx-8">
    <p class="mb-2">Order summary:</p>
    <!--Items-->
    <ul class="mx-8 border-b mb-2">
      {#each items as item}
        <li class="flex justify-between mb-2">
          <span class="block">{item.cocktail.name}</span>
          <span class="block">{item.quantity}</span>
        </li>
      {/each}
      
    </ul>
    <div class="mx-8 flex justify-between">
      <p>Total: </p>
      <p>${total}</p>
    </div>
    <!--End Items-->
  </div>
  <!--End Summary-->
</div>
<!--End Order-->