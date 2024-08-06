import { injectable } from "tsyringe";
import { Orders } from "../models";
import { CreationAttributes } from "sequelize";

@injectable()
export class OrderRepository {

    async createOrder ( order: CreationAttributes<Orders> ): Promise<Orders> {
        return await Orders.create(order)
    }
}