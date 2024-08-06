import { OrderRepository } from "../repositories";
import { injectable, inject } from "tsyringe";
import { Orders, ProductsCarts } from "../models";
import { CreationAttributes } from "sequelize";



@injectable()
export class OrderService {
    constructor (@inject(OrderRepository) private OrderRepository: OrderRepository)
    {}

    async createOrder(order: CreationAttributes<Orders>, products:ProductsCarts[]): Promise <Orders | void> {
        try {

            const total: number = products.reduce((acc, product) => {
                const price = parseFloat(product.product.price);
                return acc += price * product.quantity;
            }, 0)
            console.log(total);
            
            return await this.OrderRepository.createOrder({...order, total:total});
        } catch (error) {
            if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
        }
    }
}