import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { AuthService, CartService, RolService } from "../services";

export class AuthController {
	// Create
	static async register(req: Request, res: Response, next: NextFunction) {
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
			next(error);
		}
	}


	static async login(req: Request, res: Response, next: NextFunction) {
		try {
			const authService = container.resolve(AuthService);
			const token = await authService.login(req.body.email, req.body.password);
			res.status(200).json(token);
		} catch (error) {
			next(error);
		}
	}
}