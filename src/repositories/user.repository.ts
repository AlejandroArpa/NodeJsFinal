import { injectable } from "tsyringe";
import { Users } from "../models";
import { CreationAttributes} from 'sequelize';
import { handleSequelizeError } from "../utilities";

@injectable()
export class UserRepository {
	
	// Create
	async createUser(user: CreationAttributes<Users>): Promise<Users> {
		return await Users.create(user);
	}
	// Read
	async getAllUsers(): Promise<Users[] | void> {
		try {
			return await Users.findAll();
		} catch (error) {
			console.log(error);
			handleSequelizeError(error);
		}
	}
	// Update
	async updateUser(id: number, user: CreationAttributes<Users>) : Promise<Users | void> {
		try {
			const userToUpdate = await Users.findByPk(id);
			if (!userToUpdate) {
				throw new Error('User not found');
			}
			await userToUpdate.update(user);
			return userToUpdate;
		} catch (error) {
			console.log(error);
			handleSequelizeError(error);
		}
	}
	

}