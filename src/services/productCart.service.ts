import { ProductsCartsRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { ProductsCarts } from '../models';
import { CreationAttributes } from 'sequelize';
import { handleSequelizeError } from '../utilities';

@injectable()
export class ProductCartService {
	constructor(@inject(ProductsCartsRepository) private ProductsCartsRepository: ProductsCartsRepository) { }

	// async getAllProducts(): Promise<Products[] | void> {
	// 	return await this.ProductsCartsRepository.getAllProducts();
	// }
	// Create 
	async createProductCart(productCart: CreationAttributes<ProductsCarts>): Promise<ProductsCarts | void> {
		try {
			return await this.ProductsCartsRepository.createProductCart(productCart);
		} catch (error) {
			if (error instanceof Error) {
				handleSequelizeError(error);
			}
		}
	}
	// Read
	async getProductsAndQty(cartId: number): Promise<ProductsCarts[] | void> {
		try {
			return await this.ProductsCartsRepository.getProductsAndQty(cartId);
		} catch (error) {
			if (error instanceof Error) {
				handleSequelizeError(error);
			}
		}
	}
	// Update
	async updateProductCartProductsQty(id: number, productId: number, quantity: number): Promise<ProductsCarts | void> {
		try {
			return await this.ProductsCartsRepository.updateProductCartProductsQty(id, productId, quantity);
		} catch (error) {
			if (error instanceof Error) {
				handleSequelizeError(error);
			}
		}
	}
	// Delete
	async deleteProductCartProducts(id: number, productId: number): Promise<void> {
		try {
			return await this.ProductsCartsRepository.deleteProductCartProducts(id, productId);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error in ProductCart: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
}