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


<style>

  /* CSS */
  
  
  /* CSS */
  .button-36 {
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    flex-shrink: 0;
    font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 2.5rem;
    padding: 0 1.6rem;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-36:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }
  </style>
