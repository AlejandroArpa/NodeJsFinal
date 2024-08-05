import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/";

export class UserController {
	static async getAllUsers(_: Request, res: Response, next: NextFunction) {
		const userService = container.resolve(UserService);
		const users = await userService.getAllUsers();
		res.status(206).json(users);
	}

	static async createUser(req: Request, res: Response, next: NextFunction) {
		try {
		const userService = container.resolve(UserService);
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
		} catch (error) {
			next(error);
		}
	}
}