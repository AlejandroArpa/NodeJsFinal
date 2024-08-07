import { Request, Response} from "express";
import { container } from "tsyringe";
import { RolService } from "../services/";
import { errorHandler } from "../utilities";

export class RolController {
	static async getAllRoles(_: Request, res: Response) {
		const rolService = container.resolve(RolService);
		const roles = await rolService.getAllRoles();
		res.status(200).json(roles);
	}

	static async createRol(req: Request, res: Response) {
		try {
			const rolService = container.resolve(RolService);
			const rol = await rolService.createRol(req.body);
			res.status(201).json(rol);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}

	static async deleteRol(req: Request, res: Response) {
		try {
			const rolService = container.resolve(RolService);
			const rol = await rolService.deleteRol(parseInt( req.params.id));
			res.status(200).json(rol);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}
}