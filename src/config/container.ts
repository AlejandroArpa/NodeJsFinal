import { container } from 'tsyringe';
import { UserService } from '../services';
import { UserRepository } from '../repositories/';

container.registerSingleton<UserRepository>(UserRepository)
container.registerSingleton<UserService>(UserService);