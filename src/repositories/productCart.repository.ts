import { injectable } from "tsyringe";
import { ProductsCarts, Products } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class ProductsCartsRepository {


	async createProductCart(productCart: CreationAttributes<ProductsCarts>): Promise<ProductsCarts> {
		return await ProductsCarts.create(productCart);
	}

	async getProductsAndQty(cartId: number): Promise<ProductsCarts[] | void> {
		const products = await ProductsCarts.findAll({where :{cartId:cartId}, include: Products});
		if(products.length > 0){
			const result = products.map(pc => pc.get({ plain: true }));
			return result ;
		}
		else throw new Error('There is not products in this cart')
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