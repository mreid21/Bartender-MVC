<script lang="ts">
  import {cart} from '../store/store'
  let cartItems = []

  cart.subscribe(cartData => {
    cartItems = cartData
  })
</script>
<div>
  <p>hello from checkout</p>
  <p>{JSON.stringify(cartItems)}</p>
</div>