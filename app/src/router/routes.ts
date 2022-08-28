import OrderQueue from "../lib/OrderQueue.svelte"
import Home from "../lib/Home.svelte"
import Login from "../lib/Login.svelte"
import Checkout from "../lib/Checkout.svelte";
import { user } from '../store/store';


function isLoggedIn(): boolean{
  let loggedIn: boolean
  user.subscribe((value) => {
    loggedIn = value.token !== ''
  })
  return loggedIn
}

const routes = [
  {
    name: '/',
    component: Home,
    onlyIf: {guard: !isLoggedIn, redirect: '/user/orders'}
  },
  {
    name: '/checkout',
    component: Checkout,
    onlyIf: {guard: !isLoggedIn, redirect: '/login'}
  },
  {
    name: '/login',
    component: Login,
    onlyIf: {guard: !isLoggedIn, redirect: '/login'}
  },
  {
    name: '/:bartender/orders',
    component: OrderQueue,
    onlyIf: { guard: isLoggedIn, redirect: '/login' }
  },
  
]

export {routes}