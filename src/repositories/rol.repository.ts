import { injectable } from "tsyringe";
import { Roles } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class RolRepository {
	
	async getAllRoles(): Promise<Roles[] | void> {
		try {
			return await Roles.findAll();
		} catch (error) {
			console.log(error);
			this.handleSequelizeError(error);
		}
		
	}

	async createRol(rol: CreationAttributes<Roles>): Promise<Roles> {
		return await Roles.create(rol);
	}

	async deleteRol(id:number): Promise<void> {
		const rol = await Roles.findByPk(id);
        if (!rol) {
            throw new Error('Anime not found');
        }
        await rol.destroy();
	}

	private handleSequelizeError(error: any) {
		if (error instanceof Error) {
			throw new Error('Repository Error: ' + error.message);
	} else {
			throw new Error('Repository Error: An unknown error occurred');
	}
}
}