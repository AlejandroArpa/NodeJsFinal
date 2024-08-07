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
	// Delete
	async deleteUser(id: number): Promise<void> {
		try {
			return await this.UserRepository.deleteUser(id);
		} catch (error) {
			errorInstanceThrowService(error);
		}
	}
}