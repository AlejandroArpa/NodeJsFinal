import { Router } from 'express';
import { userRoute } from './users.route';

export const router = Router();

router.use('/users', userRoute);
