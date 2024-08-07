import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { OrderService, ProductCartService } from "../services";

export class OrderController {
    // Create
    static async createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const orderService = container.resolve(OrderService);
            const productCarService = container.resolve(ProductCartService);
            const products = await productCarService.getProductsAndQty(req.body.cartId)            
            if(products){
                const order = await orderService.createOrder(req.body, products);
                res.status(201).json(order);
            }
        } catch (error) {
            next(error);
        }
    }
    // Read
    static async getAllOrders(req: Request, res: Response, next: NextFunction) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            next(error);
        }
    }
    // Delete
    static async deleteOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const orderService = container.resolve(OrderService);
            const id = parseInt(req.params.id);
            const order = await orderService.deleteOrder(id);
            res.status(200).json(order);
        } catch (error) {
            next(error);
        }
    }
}