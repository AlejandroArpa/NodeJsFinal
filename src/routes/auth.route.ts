import { Router } from 'express';
import { AuthController } from '../controllers';

export const authRoute = Router();

authRoute.post('/', AuthController.register);

