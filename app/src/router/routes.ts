import Home from "../lib/Home.svelte"
import Login from "../lib/Login.svelte"

const routes = [
  {
    name: '/',
    component: Home
  },
  {
    name: '/login',
    component: Login
  }
]

export {routes}