import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { AuthService } from "../services";

export class AuthController {
	
	static async register(req: Request, res: Response, next: NextFunction) {
		try {
			const authService = container.resolve(AuthService);
			const user = await authService.register(req.body);
			res.status(201).json(user);
		} catch (error) {
			next(error);
		}
	}
}