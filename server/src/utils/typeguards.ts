import { Cocktail } from "../models/cocktail"
import { Bartender } from "../models/bartender"
import { Order } from "../models/order"

const isCockTail = (body: unknown): body is Cocktail => {
  if(!body) return false

  if(typeof body === 'object' && (body.hasOwnProperty('name') && body.hasOwnProperty('price'))){
    const {name, price} = body as Cocktail
    return typeof name === 'string' && typeof price === 'number'
  }

  return false

}

const isOrder = (body: unknown): body is Order => {
  if(!body) return false

  if(typeof body === 'object' && (body.hasOwnProperty('total') && body.hasOwnProperty('orderedAt') && body.hasOwnProperty('items'))){
    const {total, orderedAt, items} = body as Order
    return typeof total === 'number' && typeof orderedAt === 'string' && Array.isArray(items) && items.every(item => typeof item.id === 'number' && typeof item.id === 'number')
  }

  return false
}

const isBartender = (body: unknown): body is Bartender => {
  if(!body) return false

  if(typeof body === 'object' && (body.hasOwnProperty('username') && body.hasOwnProperty('password'))){
    const {username, password} = body as Bartender
    return typeof username === 'string' && typeof password === 'string'
  }

  return false
}


export {isCockTail, isBartender, isOrder}