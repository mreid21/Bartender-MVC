import { Cocktail } from "./cocktail"

interface Order {
  total: number,
  orderedAt: Date,
  items: number[]
}


export {Order}