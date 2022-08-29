import type { AuthUser } from 'src/types/auth.type';
import { derived, writable } from 'svelte/store';

const getTokenFromStorage = (): string => {
  const token = localStorage.getItem('auth')
  return token ? token : ''
}

export const user = writable<AuthUser>({token: getTokenFromStorage(), username: ''});

export const cartItems = writable([])

export const cart = derived(
  cartItems,
  $cartItems => $cartItems.reduce((items, item) => {
    const exists = items.find(x => x.cocktail.id === item.id)
    if(!exists){
      items.push({cocktail: item, quantity: 1})
    }
    else {
      exists.quantity += 1
    }

    return items
  }, [])
)