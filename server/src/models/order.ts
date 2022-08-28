import { Cocktail } from "./cocktail"

interface Order {
  total: number,
  orderedAt: Date,
  items: {id: number, quantity: number}[]
}


export {Order}