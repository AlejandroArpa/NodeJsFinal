import { RolRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Roles } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class RolService {
	constructor(@inject(RolRepository) private RolRepository: RolRepository) { }

	async getAllRoles(): Promise<Roles[] | void> {
		return await this.RolRepository.getAllRoles();
	}

	async createRol(rol: CreationAttributes<Roles>): Promise<Roles | void> {
		try {
			return await this.RolRepository.createRol(rol);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}

	async deleteRol(id: number): Promise<void> {
		try {
			return await this.RolRepository.deleteRol(id);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
}