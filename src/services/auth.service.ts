import { AuthRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { Users } from '../models';
import { CreationAttributes } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";

config();

@injectable()
export class AuthService {
	constructor(@inject(AuthRepository) private AuthRepository: AuthRepository) { }

	async register(user: CreationAttributes<Users>): Promise<Users | void> {
		try {
			const hashedPassword = await bcrypt.hash(user.password, 10);
			return await this.AuthRepository.createUser({...user, password: hashedPassword});
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}

	async login(email: string, password: string): Promise<string | void> {
		try {
			const user = await this.AuthRepository.getUserByEmail(email);
			if (!user) {
				throw new Error('User not found');
			}
			const valid = await bcrypt.compare(password, user.password);
			if (!valid) {
				throw new Error('Invalid password');
			}
			const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
			return token;
		} catch (error) {
			if (error instanceof Error) {
				throw new Error('Service Error: ' + error.message);
			} else {
				throw new Error('Service Error: An unknown error occurred');
			}
		}
	}
}