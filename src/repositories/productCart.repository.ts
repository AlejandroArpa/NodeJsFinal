import { injectable } from "tsyringe";
import { ProductsCarts } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class ProductsCartsRepository {


	async createProductCart(productCart: CreationAttributes<ProductsCarts>): Promise<ProductsCarts> {
		return await ProductsCarts.create(productCart);
	}

	// async deleteCart(id:number): Promise<void> {
	// 	const cart = await Carts.findByPk(id);
    //     if (!cart) {
    //         throw new Error('Cart not found');
    //     }
    //     await cart.destroy();
	// }

	private handleSequelizeError(error: any) {
		if (error instanceof Error) {
			throw new Error('Repository Error: ' + error.message);
	} else {
			throw new Error('Repository Error: An unknown error occurred');
	}
}
}