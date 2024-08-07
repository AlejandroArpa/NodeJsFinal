import { Users } from '../models';
import { injectable } from "tsyringe";
import { CreationAttributes } from 'sequelize';

@injectable()
export class AuthRepository {

	// Create
	async createUser(user: CreationAttributes<Users>): Promise<Users> {
		return await Users.create(user);
	}
	// Read
	async getUserByEmail(email: string): Promise<Users | null> {
		const user = await Users.findOne({ where: { email }});
		if(user){
			return user;
		}
		else{
			throw new Error('User not found');
		}
	}
	
}
