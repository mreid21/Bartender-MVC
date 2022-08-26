import { Cocktail } from "../models/cocktail"
import { Bartender } from "../models/bartender"

const isCockTail = (body: unknown): body is Cocktail => {
  if(!body) return false

  if(typeof body === 'object' && (body.hasOwnProperty('name') || body.hasOwnProperty('price'))){
    const {name, price} = body as Cocktail
    return typeof name === 'string' && typeof price === 'number'
  }

  return false

}

const isBartender = (body: unknown): body is Bartender => {
  if(!body) return false

  if(typeof body === 'object' && (body.hasOwnProperty('username') || body.hasOwnProperty('password'))){
    const {username, password} = body as Bartender
    return typeof username === 'string' && typeof username === 'string'
  }

  return false
}


export {isCockTail, isBartender}