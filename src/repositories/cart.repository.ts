import { injectable } from "tsyringe";
import { Carts } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class CartRepository {


	async createCart(cart: CreationAttributes<Carts>): Promise<Carts> {
		return await Carts.create(cart);
	}

	async deleteCart(id:number): Promise<void> {
		const cart = await Carts.findByPk(id);
        if (!cart) {
            throw new Error('Cart not found');
        }
        await cart.destroy();
	}

	async findById(id:number): Promise<Carts | void>{
		const cart = await Carts.findByPk(id);
		if (!cart) {
            throw new Error('Cart not found');
        }
		else return cart;
	}

	private handleSequelizeError(error: any) {
		if (error instanceof Error) {
			throw new Error('Repository Error: ' + error.message);
	} else {
			throw new Error('Repository Error: An unknown error occurred');
	}
}
}