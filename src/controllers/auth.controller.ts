import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthService, CartService, RolService } from "../services";
import { errorHandler } from "../utilities";

export class AuthController {
	// Create
	static async register(req: Request, res: Response) {
		try {
			const authService = container.resolve(AuthService);
			const cartService = container.resolve(CartService);
			const rolService = container.resolve(RolService);
			await rolService.validateRol(req.body.rolId);
			const user = await authService.register(req.body);
			if(user){
				await cartService.createCart({userId: user.id});
				res.status(201).json(user);
			}
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}


	static async login(req: Request, res: Response) {
		try {
			const authService = container.resolve(AuthService);
			const token = await authService.login(req.body.email, req.body.password);
			res.status(200).json(token);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}
}