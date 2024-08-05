import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { RolService } from "../services/";

export class RolController {
	static async getAllRoles(_: Request, res: Response, next: NextFunction) {
		const rolService = container.resolve(RolService);
		const roles = await rolService.getAllRoles();
		res.status(200).json(roles);
	}

	static async createRol(req: Request, res: Response, next: NextFunction) {
		try {
			const rolService = container.resolve(RolService);
			const rol = await rolService.createRol(req.body);
			res.status(201).json(rol);
		} catch (error) {
			next(error);
		}
	}

	static async deleteRol(req: Request, res: Response, next: NextFunction) {
		try {
			const rolService = container.resolve(RolService);
			const rol = await rolService.deleteRol(parseInt( req.params.id));
			res.status(200).json(rol);
		} catch (error) {
			next(error)
		}
	}
}