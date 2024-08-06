import { UserRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { Users } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class UserService {
	constructor(@inject(UserRepository) private UserRepository: UserRepository) { }

	async getAllUsers(): Promise<Users[] | void> {
		return await this.UserRepository.getAllUsers();
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