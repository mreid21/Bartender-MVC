<script lang="ts">
  import {cart} from '../store/store'
  import OrderItem from '../lib/OrderItem.svelte'
  import { Navigate } from 'svelte-router-spa'
  let cartItems = []
  $: total = cartItems.map(item => item.cocktail.price * item.quantity).reduce((prev, next) => prev + next, 0)
  cart.subscribe(cartData => {
    cartItems = cartData
  })
</script>


<section class="w-screen lg:flex lg:justify-center">
  <div class="container">
    <div class="flex flex-col gap-4 min-w-full">
      {#each cartItems as item}
          <OrderItem item={item}/>  
      {/each}
      <div class="flex flex-col items-end px-4">
        <p class="text-2xl mb-4">Total: <span class="text-3xl font-semibold">${total}</span></p>
        <div>
          <span class="inline-block px-4 py-2 mr-2 border rounded-lg hover:bg-slate-600 hover:text-white transition">
            <Navigate to="/">Go back</Navigate>
          </span>
          <button class="button-36">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</section>


