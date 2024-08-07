import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProductCartService, ProductService, CartService } from "../services/";
import { errorHandler } from "../utilities";

export class ProductCartController {

	// Create
	static async createProductCart(req: Request, res: Response) {
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
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}
	// Update
	static async updateProductCartProductsQty(req: Request, res: Response) {
		try {
			const productCartService = container.resolve(ProductCartService);
			const productCart = await productCartService.updateProductCartProductsQty(parseInt(req.params.id), parseInt(req.params.productId), parseInt(req.body.quantity));
			res.status(201).json(productCart);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}
	// Delete
	static async deleteProductCartProducts(req: Request, res: Response) {
		try {
			const productCartService = container.resolve(ProductCartService);
			const productCart = await productCartService.deleteProductCartProducts(parseInt(req.params.id), parseInt(req.params.productId));
			res.status(201).json(productCart);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}

}