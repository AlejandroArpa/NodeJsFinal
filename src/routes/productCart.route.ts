import { Router } from 'express';
import { ProductCartController } from '../controllers';

export const productCartRoute = Router();

// productCartRoute.get('/', ProductCartController.getAllProducts);
productCartRoute.post('/', ProductCartController.createProductCart)
// productCartRoute.delete('/:id', ProductCartController.deleteProduct )
// productCartRoute.put('/:id', ProductCartController.updateProduct)
// // // animeRouter.get('/:id', AnimeController.getAnimeById);
// userRoute.post('/', UserController.createUser);