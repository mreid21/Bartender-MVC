import { isOrder } from "../utils/typeguards";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { RequestHandler } from "express";
import prisma from '../prisma-init';


const getAllOrders: RequestHandler = async (req, res) => {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        select: {
          cocktail: {
            include: {
              img: true
            }
          },
          quantity: true
        }
      }
    },
    orderBy: {
      orderedAt: 'desc'
    }
  })

  res.status(200).send(orders)
}

const createOrder: RequestHandler = async (req, res) => {

  const order = isOrder(req.body) ? req.body : undefined

  if(order) {
    try {
      const {total, orderedAt, items} = order
      const orderDate = new Date(orderedAt)
      const newOrder = await prisma.order.create({
        data: {
          total,
          orderedAt: orderDate,
          items: {
            create: items.map((item: {id: number, quantity: number})  => ({
              quantity: item.quantity,
              cocktail: {
                connect: {
                  id: item.id
                }
              }
            }))
          }
        }
      })
      res.status(201).send(newOrder)
    }
    catch (e: unknown) {
      if(e instanceof PrismaClientKnownRequestError) {
        res.status(500).send({message: `Error: ${e.code}`})
      }
    }
  }
  else {
    
    res.status(400).send({message: 'Invalid Order'})
  }

  
}

const deleteOrder: RequestHandler = async (req, res) => {
  const id = parseInt(req.params.id)

  await prisma.order.delete({where: {id}})
  res.sendStatus(203)
}


export {getAllOrders, createOrder, deleteOrder}