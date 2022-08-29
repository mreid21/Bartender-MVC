import express from "express";
import { authenticate } from "../middleware/auth";
import { createOrder, deleteOrder, getAllOrders } from "../controllers/orderController";

const ordersRoute = express.Router();

ordersRoute.get('/', authenticate, getAllOrders)
ordersRoute.post('/', createOrder)
ordersRoute.delete('/:id', authenticate, deleteOrder)

export {ordersRoute}