import { Router } from 'express';
import { userRoute } from './users.route';
import { rolRoute } from './roles.route';
import { productRoute } from './products.route';
import { cartRoute } from './cart.route';

export const router = Router();

router.use('/users', userRoute);
router.use('/roles', rolRoute);
router.use('/products', productRoute);
router.use('/carts', cartRoute);