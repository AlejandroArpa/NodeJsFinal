import { Router } from 'express';
import { userRoute } from './users.route';
import { rolRoute } from './roles.route';
import { productRoute } from './products.route';
import { cartRoute } from './cart.route';
import { productCartRoute } from './productCart.route';
import { orderRoute } from './order.route';

export const router = Router();

router.use('/users', userRoute);
router.use('/roles', rolRoute);
router.use('/products', productRoute);
router.use('/carts', cartRoute);
router.use('/productsCarts', productCartRoute);
router.use('/orders', orderRoute);