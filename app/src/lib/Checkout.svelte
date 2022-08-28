<script lang="ts">
  import {cart, cartItems} from '../store/store'
  import OrderItem from '../lib/OrderItem.svelte'
  import { Navigate, navigateTo } from 'svelte-router-spa'
  import type { OrderType, OrderItemType } from 'src/types/order.type';
  let items = []
  $: total = items.map(item => item.cocktail.price * item.quantity).reduce((prev, next) => prev + next, 0)
  cart.subscribe(cartData => {
    items = cartData
  })

  const checkout = async () => {
    if(items.length === 0) return

    const orderItems: OrderItemType[] = items.map(item => ({id: item.cocktail.id, quantity: item.quantity}))
    const order: OrderType = {total, items: orderItems, orderedAt: new Date()}
    const orderDTO = JSON.stringify(order)

    await fetch('http://localhost:8080/orders', {
      method: 'POST',
      body: orderDTO,
      headers:{'Content-Type':'application/json'}
    })

    cartItems.update(() => [])
    navigateTo('/')
  }
</script>


<section class="w-screen lg:flex lg:justify-center">
  <div class="container">
    <div class="flex flex-col gap-4 min-w-full">
      {#each items as item}
          <OrderItem item={item}/>  
      {/each}
      <div class="flex flex-col items-end px-4">
        <p class="text-2xl mb-4">Total: <span class="text-3xl font-semibold">${total}</span></p>
        <div>
          <span class="inline-block px-4 py-2 mr-2 border rounded-lg hover:bg-slate-600 hover:text-white transition">
            <Navigate to="/">Go back</Navigate>
          </span>
          <button on:click={checkout} class="button-36">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</section>


