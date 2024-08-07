import { OrderRepository } from "../repositories";
import { injectable, inject } from "tsyringe";
import { Orders, ProductsCarts } from "../models";
import { CreationAttributes } from "sequelize";
import { errorInstanceThrowService } from "../utilities";



@injectable()
export class OrderService {
    constructor (@inject(OrderRepository) private OrderRepository: OrderRepository)
    {}
    // Create
    async createOrder(order: CreationAttributes<Orders>, products:ProductsCarts[]): Promise <Orders | void> {
        try {

            const total: number = products.reduce((acc, product) => {
                const price = parseFloat(product.product.price);
                return acc += price * product.quantity;
            }, 0)
            console.log(total);
            
            return await this.OrderRepository.createOrder({...order, total:total});
        } catch (error) {
            errorInstanceThrowService(error);
        }
    }
    // Read
    async getAllOrders(): Promise<Orders[] | void> {
        try {
            return await this.OrderRepository.getAllOrders();
        } catch (error) {
            errorInstanceThrowService(error);
        }
    }
    // Delete
    async deleteOrder(id: number): Promise<number| void>  {
        try {
            const order = await Orders.findByPk(id);
            if (!order) {
                throw new Error('Order not found');
            }
            return await this.OrderRepository.deleteOrder(id);
        } catch (error) {
            errorInstanceThrowService(error);
        }
    }
}