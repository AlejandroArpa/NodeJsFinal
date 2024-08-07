import { injectable } from "tsyringe";
import { Products } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class ProductRepository {
	
	async getAllProducts(): Promise<Products[] | void> {
		try {
			return await Products.findAll();
		} catch (error) {
			console.log(error);
			this.handleSequelizeError(error);
		}
	}

	async getProductsByOrderId(id: number): Promise<Products[] | void> {
		try {
			return await Products.findAll({
				where: {
					orderId: id
				}
			});
		} catch (error) {
			this.handleSequelizeError(error);
		}
	}

	async createProduct(product: CreationAttributes<Products>): Promise<Products> {
		return await Products.create(product);
	}

	async deleteProduct(id:number): Promise<void> {
		const product = await Products.findByPk(id);
        if (!product) {
            throw new Error('Product not found');
        }
        await product.destroy();
	}

	async findById(id:number): Promise<Products | void>{
		const product = await Products.findByPk(id);
		if (!product) {
            throw new Error('Product not found');
        }
		else return product;
	}

	async getStock(id:number): Promise<number | void> {
		const product = await Products.findByPk(id);
		if (!product) {
            throw new Error('Product not found');
        }
		else return product.stock;
	}

	async updateProduct(id:number, data: any): Promise<Products> {
		const product = await Products.findByPk(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return await product.update(data);
	}

	private handleSequelizeError(error: any) {
		if (error instanceof Error) {
			throw new Error('Repository Error: ' + error.message);
	} else {
			throw new Error('Repository Error: An unknown error occurred');
	}
}
}