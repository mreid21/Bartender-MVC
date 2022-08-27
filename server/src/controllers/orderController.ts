import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { RequestHandler } from "express";
import prisma from '../prisma-init';


const getAllOrders: RequestHandler = async (req, res) => {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        select: {
          cocktail: true
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
  const {total, orderedAt, items} = req.body
  const orderDate = new Date(orderedAt)

  const newOrder = await prisma.order.create({
    data: {
      total,
      orderedAt: orderDate,
      items: {
        create: items.map((id: number) => ({
          cocktail: {
            connect: {
              id
            }
          }
        }))
      }
    }
  })

  res.status(201).send(newOrder)
}


export {getAllOrders, createOrder}