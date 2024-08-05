import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { RolService } from "../services/";

export class RolController {
	static async getAllRoles(_: Request, res: Response, next: NextFunction) {
		const rolService = container.resolve(RolService);
		const roles = await rolService.getAllRoles();
		res.status(200).json(roles);
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