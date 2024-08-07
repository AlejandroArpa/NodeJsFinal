import { Router } from 'express';
import { UserController } from '../controllers';
import authorize from '../middlewares/auth.middleware';

export const userRoute = Router();

userRoute.get('/', UserController.getAllUsers);
userRoute.put('/:id', UserController.updateUser);
// userRoute.delete('/:id',authorize(1, 'canDelete') , UserController.deleteUser);
