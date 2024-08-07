import { injectable } from "tsyringe";
import { Carts, Orders, Products, ProductsCarts } from "../models";
import { CreationAttributes } from "sequelize";

@injectable()
export class OrderRepository {
    // Create
    async createOrder(order: CreationAttributes<Orders>): Promise<Orders> {
        return await Orders.create(order)
    }
    // Read
    async getAllOrders(): Promise<Orders[]> {
        return await Orders.findAll()
    }
    async getOrderByUser(id: number): Promise<Orders[]> {
        return await Orders.findAll({
            where: { userId: id }, include: [
                {
                    model: Carts,
                    // as: 'cartId',
                    include: [
                        {
                            model: ProductsCarts,
                            // as: 'productsCarts',
                            include: [
                                {
                                    model: Products,
                                    as: 'product',
                                    attributes: ['name', 'price']
                                }
                            ],
                            attributes: ['quantity']
                        }
                    ]
                }
            ]
        })
    }
    // Update
    async updateOrder(id: number, order: CreationAttributes<Orders>): Promise<Orders> {
        const orderToUpdate = await Orders.findByPk(id)
        if (!orderToUpdate) {
            throw new Error('Order not found')
        }
        await orderToUpdate.update(order)
        return orderToUpdate
    }
    // Delete
    async deleteOrder(id: number): Promise<number> {
        return await Orders.destroy({ where: { id } })
    }
}