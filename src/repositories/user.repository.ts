import { injectable } from "tsyringe";
import { Users } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class UserRepository {
	
	async getAllUsers(): Promise<Users[] | void> {
		try {
			return await Users.findAll();
		} catch (error) {
			console.log(error);
			this.handleSequelizeError(error);
		}
		
	}

	async createUser(user: CreationAttributes<Users>): Promise<Users> {
		return await Users.create(user);
	}

	private handleSequelizeError(error: any) {
		if (error instanceof Error) {
			throw new Error('Repository Error: ' + error.message);
	} else {
			throw new Error('Repository Error: An unknown error occurred');
	}
}
}