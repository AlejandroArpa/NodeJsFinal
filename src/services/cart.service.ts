import { CartRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Carts } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class CartService {
	constructor(@inject(CartRepository) private CartRepository: CartRepository) { }

	async createCart(cart: CreationAttributes<Carts>): Promise<Carts | void> {
		try {
			return await this.CartRepository.createCart(cart);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}

	async deleteCart(id: number): Promise<void> {
		try {
			return await this.CartRepository.deleteCart(id);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
}