import { Request, Response} from "express";
import { container } from "tsyringe";
import { OrderService, ProductCartService } from "../services";
import { errorHandler } from "../utilities";

export class OrderController {
    // Create
    static async createOrder(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const productCarService = container.resolve(ProductCartService);
            const products = await productCarService.getProductsAndQty(req.body.cartId)            
            if(products){
                const order = await orderService.createOrder(req.body, products);
                res.status(201).json(order);
            }
        } catch (error) {
            if(error instanceof Error){
				errorHandler(error, req, res);
			}
        }
    }

    static async getOrderByUser(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getOrderByUser(parseInt(req.params.id));
            res.status(200).json(orders);
        } catch (error) {
            if(error instanceof Error){
				errorHandler(error, req, res);
			}
        }
    }
    // Read
    static async getAllOrders(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            if(error instanceof Error){
				errorHandler(error, req, res);
			}
        }
    }
    // Update
    static async updateOrder(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const id = parseInt(req.params.id);
            const order = await orderService.updateOrder(id, req.body);
            res.status(200).json(order);
        } catch (error) {
            if(error instanceof Error){
				errorHandler(error, req, res);
			}
        }
    }
    // Delete
    static async deleteOrder(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const id = parseInt(req.params.id);
            const order = await orderService.deleteOrder(id);
            res.status(200).json(order);
        } catch (error) {
            if(error instanceof Error){
				errorHandler(error, req, res);
			}
        }
    }
}