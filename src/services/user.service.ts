import { UserRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Users } from '../models';
import { CreationAttributes } from 'sequelize';
import { errorInstanceThrowService } from '../utilities';
import bcrypt from 'bcryptjs';

@injectable()
export class UserService {
	constructor(@inject(UserRepository) private UserRepository: UserRepository) { }

	// Create
	// Read
	async getAllUsers(): Promise<Users[] | void> {
		return await this.UserRepository.getAllUsers();
	}
	// Update
	async updateUser(id: number, user: CreationAttributes<Users>): Promise<Users | void> {
		try {
			const hashedPassword = await bcrypt.hash(user.password, 10);
			return await this.UserRepository.updateUser(id, {...user, password: hashedPassword});
		} catch (error) {
			errorInstanceThrowService(error);
		}
	}
	// async createUser(user: CreationAttributes<Users>): Promise<Users | void> {
	// 	try {
	// 		return await this.UserRepository.createUser(user);
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			throw new Error('Service Error: ' + error.message);
	// 		} else {
	// 			throw new Error('Service Error: An unknown error occurred');
	// 		}
	// 	}
	// }
}