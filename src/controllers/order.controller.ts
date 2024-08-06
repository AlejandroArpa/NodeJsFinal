import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { OrderService, ProductCartService } from "../services";

export class OrderController {

    static async createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const orderService = container.resolve(OrderService);
            const productCarService = container.resolve(ProductCartService);
            const order = await orderService.createOrder(req.body);
            res.status(201).json(order);
        } catch (error) {
            next(error);
        }
    }
}