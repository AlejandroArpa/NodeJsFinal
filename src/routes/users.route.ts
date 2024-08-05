import { Router } from 'express';
import { UserController } from '../controllers';

export const userRoute = Router();

userRoute.get('/', UserController.getAllUsers);
userRoute.post('/', UserController.createUser)
// // // animeRouter.get('/:id', AnimeController.getAnimeById);
// userRoute.post('/', UserController.createUser);