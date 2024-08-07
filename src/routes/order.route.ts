import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import authorize from "../middlewares/auth.middleware";

export const orderRoute = Router();

orderRoute.post('/' , authorize(2, "canCreate") ,OrderController.createOrder);
orderRoute.delete('/:id', authorize(2, "canDelete") , OrderController.deleteOrder);
orderRoute.get('/' ,authorize(2, "canRead"), OrderController.getAllOrders);
// orderRoute.get('/:id', authorize(2, "canRead") , OrderController.getOrderById);
// orderRoute.put('/:id', authorize(2, "canUpdate") , OrderController.updateOrder);