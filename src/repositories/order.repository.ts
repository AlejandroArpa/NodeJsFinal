import { injectable } from "tsyringe";
import { Orders } from "../models";
import { CreationAttributes } from "sequelize";

@injectable()
export class OrderRepository {
    // Create
    async createOrder ( order: CreationAttributes<Orders> ): Promise<Orders> {
        return await Orders.create(order)
    }
    // Read
    async getAllOrders (): Promise<Orders[]> {
        return await Orders.findAll()
    }
    // Delete
    async deleteOrder ( id: number ): Promise<number> {
        return await Orders.destroy({ where: { id } })
    }
}