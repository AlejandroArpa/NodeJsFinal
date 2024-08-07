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
	async getUserById(id: number): Promise<Users | void> {
		try {
			const user = await Users.findByPk(id);
			if (!user) {
				throw new Error('User not found');
			}
			return user;
		} catch (error) {
			handleSequelizeError(error);
		}
	}

	// Update
	async updateUser(id: number, user: CreationAttributes<Users>) : Promise<Users | void> {
		try {
			const userToUpdate = await this.getUserById(id);
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

	// Delete
	async deleteUser(id: number): Promise<void> {
		try {
			const user = await this.getUserById(id);
			if (!user) {
				throw new Error('User not found');
			}
			await user.destroy();
		} catch (error) {
			handleSequelizeError(error);
		}
	}
	

}