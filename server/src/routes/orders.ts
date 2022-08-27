import express from "express";
import { authenticate } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/orderController";

const ordersRoute = express.Router();

ordersRoute.get('/', getAllOrders)
ordersRoute.post('/', createOrder)


export {ordersRoute}