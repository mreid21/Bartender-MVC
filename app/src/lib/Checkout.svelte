<script lang="ts">
  import {cart, cartItems} from '../store/store'
  import OrderItem from '../lib/OrderItem.svelte'
  import { Navigate, navigateTo } from 'svelte-router-spa'
  import type { OrderType, OrderItemType } from 'src/types/order.type';

  let items = []
  let rawItems = []

  $: total = items.map(item => item.cocktail.price * item.quantity).reduce((prev, next) => prev + next, 0)

  $: if(items.length === 0) {
    navigateTo('/')
  }
  cart.subscribe(cartData => {
    items = cartData
  })

  cartItems.subscribe((items) => {
    rawItems = items
  })

  const checkout = async () => {
    if(items.length === 0) return

    //prepare order items for api
    const orderItems: OrderItemType[] = items.map(item => ({id: item.cocktail.id, quantity: item.quantity}))
    const order: OrderType = {total, items: orderItems, orderedAt: new Date()}
    const orderDTO = JSON.stringify(order)

    await fetch(`${import.meta.env.VITE_BASE_URL}/orders`, {
      method: 'POST',
      body: orderDTO,
      headers:{'Content-Type':'application/json'}
    })

    clearCart()
    navigateTo('/')
  }

  const remove = (event) => {
    const deleted = event.detail
    const update = rawItems.filter(item => item.id !== deleted)
    cartItems.update(() => [...update])
  }

  const reduceQuantity = (event) => {
    const reduced = event.detail
    const index = rawItems.findIndex((item) => item.id === reduced)

    if(index !== -1){
      const update = rawItems
      update.splice(index, 1)
      cartItems.update(() => [...update])
    }
  }

  const increaseQuantity = (event) => {
    const increased = event.detail
    const update = [...rawItems, increased]
    cartItems.update(() => [...update])
  }

  const clearCart = () => {
    cartItems.update(() => [])
  }
</script>


<section class="w-screen lg:flex lg:justify-center">
  <div class="container">
    <div class="flex flex-col gap-4 min-w-full">
      {#each items as item}
          <OrderItem on:increase={increaseQuantity} on:reduce={reduceQuantity} on:remove={remove} item={item}/>  
      {/each}
      <div class="flex justify-between items-end px-4">
        <button on:click={clearCart} class="inline-block px-4 py-2 mr-2 border bg-red-500 text-white rounded-lg hover:bg-red-700 font-semibold transition">Clear cart</button>
          <div>
            <p class="text-2xl mb-4 text-end">Total: <span class="text-3xl font-semibold">${total}</span></p>
            <span class="inline-block px-4 py-2 mr-2 border rounded-lg hover:bg-slate-600 hover:text-white transition">
              <Navigate to="/">Continue shopping</Navigate>
            </span>
            <button on:click={checkout} class="button-36">Checkout</button>
          </div>
      </div>
    </div>
  </div>
</section>


