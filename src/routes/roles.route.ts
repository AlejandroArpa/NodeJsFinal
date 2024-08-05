import { Router } from 'express';
import { RolController } from '../controllers';

export const rolRoute = Router();

rolRoute.get('/', RolController.getAllRoles);
rolRoute.post('/', RolController.createRol)
rolRoute.delete('/:id', RolController.deleteRol )
// // // animeRouter.get('/:id', AnimeController.getAnimeById);
// userRoute.post('/', UserController.createUser);