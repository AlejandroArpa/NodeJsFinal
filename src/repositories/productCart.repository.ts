import { injectable } from "tsyringe";
import { ProductsCarts, Products } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class ProductsCartsRepository {

	// Create
	async createProductCart(productCart: CreationAttributes<ProductsCarts>): Promise<ProductsCarts> {
		return await ProductsCarts.create(productCart);
	}
	// Read
	async getProductsAndQty(cartId: number): Promise<ProductsCarts[] | void> {
		const products = await ProductsCarts.findAll({where :{cartId:cartId}, include: Products});
		if(products.length > 0){
			const result = products.map(pc => pc.get({ plain: true }));
			return result ;
		}
		else throw new Error('There is not products in this cart')
	}
	// Update
	async updateProductCartProductsQty(id: number, productId: number, quantity:number): Promise<ProductsCarts> {
		const productCart = await ProductsCarts.findOne({where: {cartId:id, productId:productId}});
		if(productCart){
			productCart.quantity = quantity;
			await productCart.save();
			return productCart;
		}
		else throw new Error('Product not found')
	}
	// Delete
	async deleteProductCartProducts(id: number, productId: number): Promise<void> {
		const productCart = await ProductsCarts.findOne({where: {cartId:id, productId:productId}});
		if(productCart){
			await productCart.destroy();
		}
		else throw new Error('Product not found')
	}
}