import OrderQueue from "../lib/OrderQueue.svelte"
import Home from "../lib/Home.svelte"
import Login from "../lib/Login.svelte"
import Checkout from "../lib/Checkout.svelte";
import { user } from '../store/store';
import {get} from 'svelte/store'

let token = ''
let username = ''

function isLoggedIn(): boolean {
  username = get(user).username
  token = get(user).token
  
  return token !== '' || localStorage.getItem('auth') !== null
}

//we like to pretend the route guards work
const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: 'employees/:bartender/orders',
    component: OrderQueue,
    onlyIf: { guard: isLoggedIn, redirect: '/login' }
  },
  {
    name: '/checkout',
    component: Checkout,
    onlyIf: {guard: !isLoggedIn, redirect: '/login'}
  },
  {
    name: '/login',
    component: Login,
    onlyIf: {guard: !isLoggedIn, redirect: `employees/${username}/orders`}
  }
  
  
]

export {routes}