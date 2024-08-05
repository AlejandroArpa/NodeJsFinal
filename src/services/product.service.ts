import { ProductRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Products } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class ProductService {
	constructor(@inject(ProductRepository) private ProductRepository: ProductRepository) { }

	async getAllProducts(): Promise<Products[] | void> {
		return await this.ProductRepository.getAllProducts();
	}

	async createProduct(product: CreationAttributes<Products>): Promise<Products | void> {
		try {
			return await this.ProductRepository.createProduct(product);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}

	async deleteProduct(id: number): Promise<void> {
		try {
			return await this.ProductRepository.deleteProduct(id);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}

	async updateProduct (id: number, data:any): Promise <Products> {
		try {
			return await this.ProductRepository.updateProduct(id,data);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
}