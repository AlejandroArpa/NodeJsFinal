import { OrderRepository } from "../repositories";
import { injectable, inject } from "tsyringe";
import { Orders } from "../models";
import { CreationAttributes } from "sequelize";

@injectable()
export class OrderService {
    constructor (@inject(OrderRepository) private OrderRepository: OrderRepository)
    {}

    async createOrder(order: CreationAttributes<Orders>): Promise <Orders | void> {
        try {
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