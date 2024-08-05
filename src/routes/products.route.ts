import { Router } from 'express';
import { ProductController } from '../controllers';

export const productRoute = Router();

productRoute.get('/', ProductController.getAllProducts);
productRoute.post('/', ProductController.createProduct)
productRoute.delete('/:id', ProductController.deleteProduct )
productRoute.put('/:id', ProductController.updateProduct)
// // // animeRouter.get('/:id', AnimeController.getAnimeById);
// userRoute.post('/', UserController.createUser);