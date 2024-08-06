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
            const cleansProducts = [{}];
            products.map(product => {
                console.log(product);
                
                cleansProducts.push({
                    quantity: product.quantity,
                    price: product.product.price
                })   
            });
            console.log(cleansProducts);
            
            return await this.OrderRepository.createOrder(order);
        } catch (error) {
            if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
        }
    }
}