import { Router } from 'express';
import { ProductCartController } from '../controllers';

export const productCartRoute = Router();

productCartRoute.post('/', ProductCartController.createProductCart)
// productCartRoute.delete('/:id/Products/:productId', ProductCartController.deleteProductCart)
// productCartRoute.patch('/:id/Products/:productId', ProductCartController.updateProductCart)