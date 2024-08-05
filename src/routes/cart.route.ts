import { Router } from 'express';
import { CartController } from '../controllers';

export const cartRoute = Router();

cartRoute.post('/', CartController.createCart)
cartRoute.delete('/:id', CartController.deleteCart )
// cartRoute.put('/:id', CartController.updateProduct)
// // // animeRouter.get('/:id', AnimeController.getAnimeById);
// userRoute.post('/', UserController.createUser);