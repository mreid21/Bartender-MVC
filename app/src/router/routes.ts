import OrderQueue from "../lib/OrderQueue.svelte"
import Home from "../lib/Home.svelte"
import Login from "../lib/Login.svelte"

const isLoggedIn = () => false

const routes = [
  {
    name: '/',
    component: Home,
    onlyif: {guard: !isLoggedIn, redirect: '/login'}
  },
  {
    name: '/login',
    component: Login
  },
  {
    name: '/:bartender/orders',
    component: OrderQueue,
    onlyIf: { guard: isLoggedIn, redirect: '/login' }
  }
]

export {routes}