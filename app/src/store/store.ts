import type { CocktailOrderType, CocktailType } from 'src/types/cocktail.type';
import { derived, writable } from 'svelte/store';

export const user = writable({token: ''});

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