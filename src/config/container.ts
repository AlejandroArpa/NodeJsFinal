import { container } from 'tsyringe';
import { UserService, RolService, ProductService } from '../services';
import { UserRepository, RolRepository, ProductRepository } from '../repositories/';

container.registerSingleton<UserRepository>(UserRepository)
container.registerSingleton<UserService>(UserService);

container.registerSingleton<RolRepository>(RolRepository);
container.registerSingleton<RolService>(RolService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);