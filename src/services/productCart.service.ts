import { ProductsCartsRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { ProductsCarts } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class ProductCartService {
	constructor(@inject(ProductsCartsRepository) private ProductsCartsRepository: ProductsCartsRepository) { }

	// async getAllProducts(): Promise<Products[] | void> {
	// 	return await this.ProductsCartsRepository.getAllProducts();
	// }

	async createProductCart(productCart: CreationAttributes<ProductsCarts>): Promise<ProductsCarts | void> {
		try {
			return await this.ProductsCartsRepository.createProductCart(productCart);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error in ProductCart: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}

	async getProductsAndQty (cartId: number): Promise<ProductsCarts[] | void> {
		try {
			return await this.ProductsCartsRepository.getProductsAndQty(cartId);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error in ProductCart: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
	// async deleteProduct(id: number): Promise<void> {
	// 	try {
	// 		return await this.ProductsCartsRepository.deleteProduct(id);
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			throw new Error('Service Error: ' + error.message);
	// 		} else {
	// 			throw new Error('Service Error: An unknown error occurred');
	// 		}
	// 	}
	// }

	// async updateProduct (id: number, data:any): Promise <Products> {
	// 	try {
	// 		return await this.ProductsCartsRepository.updateProduct(id,data);
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			throw new Error('Service Error: ' + error.message);
	// 		} else {
	// 			throw new Error('Service Error: An unknown error occurred');
	// 		}
	// 	}
	// }
}