import { container } from 'tsyringe';
import { UserService, RolService, ProductService, ProductCartService, CartService } from '../services';
import { UserRepository, RolRepository, ProductRepository, ProductsCartsRepository, CartRepository } from '../repositories/';

container.registerSingleton<UserRepository>(UserRepository)
container.registerSingleton<UserService>(UserService);

container.registerSingleton<RolRepository>(RolRepository);
container.registerSingleton<RolService>(RolService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<ProductsCartsRepository>(ProductsCartsRepository);
container.registerSingleton<ProductCartService>(ProductCartService);

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);