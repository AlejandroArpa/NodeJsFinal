import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { CartService } from "../services/";

export class CartController {


	static async createCart(req: Request, res: Response, next: NextFunction) {
		try {
			const cartService = container.resolve(CartService);
			const cart = await cartService.createCart(req.body);
			res.status(201).json(cart);
		} catch (error) {
			next(error);
		}
	}

	static async deleteCart(req: Request, res: Response, next: NextFunction) {
		try {
			const cartService = container.resolve(CartService);
			const cart = await cartService.deleteCart(parseInt( req.params.id));
			res.status(200).json(cart);
		} catch (error) {
            next(error)
		}
	}
}