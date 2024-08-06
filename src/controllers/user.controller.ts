import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { UserService, CartService, RolService } from "../services/";

export class UserController {
	static async getAllUsers(_: Request, res: Response, next: NextFunction) {
		const userService = container.resolve(UserService);
		const users = await userService.getAllUsers();
		res.status(206).json(users);
	}

	// static async createUser(req: Request, res: Response, next: NextFunction) {
	// 	try {
	// 	const userService = container.resolve(UserService);
	// 	const cartService = container.resolve(CartService);
	// 	const rolService = container.resolve(RolService);
	// 	await rolService.validateRol(req.body.rolId);
	// 	const user = await userService.createUser(req.body);
	// 	if(user){
	// 		const cart = await cartService.createCart({userId: user.id});
	// 		res.status(201).json({user, cart});
	// 	}
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// }
}