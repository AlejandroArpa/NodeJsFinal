import { ProductRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Products } from '../models';
import { CreationAttributes } from 'sequelize';
import { handleSequelizeError } from '../utilities';

@injectable()
export class ProductService {
	constructor(@inject(ProductRepository) private ProductRepository: ProductRepository) { }

	// Create

	async createProduct(product: CreationAttributes<Products>): Promise<Products | void> {
		try {
			return await this.ProductRepository.createProduct(product);
		} catch (error) {
			if (error instanceof Error) {
				handleSequelizeError(error);
			}
		}
	}

	// Read

	async getAllProducts(): Promise<Products[] | void> {
		return await this.ProductRepository.getAllProducts();
	}
	
	async findById(id:number): Promise<Products | void> {
		try {
			return await this.ProductRepository.findById(id)
		} catch (error) {
			if (error instanceof Error) {
				handleSequelizeError(error);
			}
		}
	}

	async getProductsByOrderId(id: number): Promise<Products[] | void> {
		try {
			return await this.ProductRepository.getProductsByOrderId(id);
		} catch (error) {
			if (error instanceof Error) {
				handleSequelizeError(error);
			}
		}
	}

	async available(id: number, qty: number): Promise<void > {
		const stock = await this.ProductRepository.getStock(id)
		if(stock){
			if(qty > stock){
				throw new Error('Service Error: '+'Not stock available for that quantity')
			}
		}
	}
	// Delete
	async deleteProduct(id: number): Promise<void> {
		try {
			return await this.ProductRepository.deleteProduct(id);
		} catch (error) {
			if (error instanceof Error) {
				handleSequelizeError(error);
			}
		}
	}
	// Update
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