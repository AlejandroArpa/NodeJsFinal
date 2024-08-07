import { Request, Response } from "express";
import { container } from "tsyringe";
import { CartService } from "../services/";
import { errorHandler } from "../utilities";

export class CartController {


	static async createCart(req: Request, res: Response) {
		try {
			const cartService = container.resolve(CartService);
			const cart = await cartService.createCart(req.body);
			res.status(201).json(cart);
		} catch (error) {
			if (error instanceof Error) {
				errorHandler(error, req, res);
			}
		}
	}

	static async deleteCart(req: Request, res: Response) {
		try {
			const cartService = container.resolve(CartService);
			const cart = await cartService.deleteCart(parseInt(req.params.id));
			res.status(200).json(cart);
		} catch (error) {
			if (error instanceof Error) {
				errorHandler(error, req, res);
			}
		}
	}
}