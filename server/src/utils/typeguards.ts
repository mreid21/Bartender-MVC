import { Cocktail } from "@prisma/client";

const isCockTail = (body: unknown): body is Cocktail => {
  if(!body) return false

  if(typeof body === 'object' && (body.hasOwnProperty('name') || body.hasOwnProperty('price'))){
    const {name, price} = body as Cocktail
    return typeof name === 'string' && typeof price === 'number'
  }

  return false

}



export {isCockTail}