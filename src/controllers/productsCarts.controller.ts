import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { ProductCartService, ProductService, CartService } from "../services/";

export class ProductCartController {
	// static async getAllProducts(_: Request, res: Response, next: NextFunction) {
	// 	const productService = container.resolve(ProductService);
	// 	const products = await productService.getAllProducts();
	// 	res.status(200).json(products);
	// }

	static async createProductCart(req: Request, res: Response, next: NextFunction) {
		try {
			const productCartService = container.resolve(ProductCartService);
			const cartService = container.resolve(CartService);
			const productService = container.resolve(ProductService);
			const cart = await cartService.findById(req.body.cartId);
			const product = await productService.findById(req.body.productId);
			await productService.available(req.body.productId, req.body.quantity)
			if(product && cart){
				const productCart = await productCartService.createProductCart(req.body);
				res.status(201).json(productCart);
			}
		} catch (error) {
			next(error);
		}
	}

	// static async deleteProduct(req: Request, res: Response, next: NextFunction) {
	// 	try {
	// 		const productService = container.resolve(ProductService);
	// 		const product = await productService.deleteProduct(parseInt( req.params.id));
	// 		res.status(201).json(product);
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// }

	// static async updateProduct(req: Request, res: Response, next: NextFunction){
	// 	try {
	// 		const productService = container.resolve(ProductService);
	// 		const product = await productService.updateProduct(parseInt( req.params.id), req.body);
	// 		res.status(200).json(product);
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// }
}