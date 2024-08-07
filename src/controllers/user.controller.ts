import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/";
import { errorHandler } from "../utilities";

export class UserController {

	// Create
	// Read
	static async getAllUsers(_: Request, res: Response) {
		const userService = container.resolve(UserService);
		const users = await userService.getAllUsers();
		res.status(206).json(users);
	}
	// Update
	static async updateUser(req: Request, res: Response) {
		try {
			const userService = container.resolve(UserService);
			const user = await userService.updateUser(parseInt(req.params.id), req.body);
			res.status(200).json(user);
		} catch (error) {
			if (error instanceof Error) {
				errorHandler(error, req, res);
			}
		}

	}
	// Delete
	static async deleteUser(req: Request, res: Response) {
		try {
			const userService = container.resolve(UserService);
			await userService.deleteUser(parseInt(req.params.id));
			res.status(204).send();
		} catch (error) {
			if (error instanceof Error) {
				errorHandler(error, req, res);
			}
		}

	}
}