import { Users } from '../models';
import { injectable } from "tsyringe";
import { CreationAttributes } from 'sequelize';

@injectable()
export class AuthRepository {
	async createUser(user: CreationAttributes<Users>): Promise<Users> {
		return await Users.create(user);
	}

	async getUserByEmail(email: string): Promise<Users | null> {
		return await Users.findOne({ where: { email } });
	}
}
