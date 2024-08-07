import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import authorize from "../middlewares/auth.middleware";

export const orderRoute = Router();

orderRoute.post('/' , authorize(1, "canRead") ,OrderController.createOrder);
orderRoute.delete('/:id', authorize(2, "canDelete") , OrderController.deleteOrder);
orderRoute.get('/' , OrderController.getAllOrders);