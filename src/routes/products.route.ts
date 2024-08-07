import { Router } from 'express';
import { ProductController } from '../controllers';

export const productRoute = Router();

productRoute.post('/', ProductController.createProduct);
productRoute.put('/:id', ProductController.updateProduct);
productRoute.delete('/:id', ProductController.deleteProduct);
productRoute.get('/', ProductController.getAllProducts);
productRoute.get('/orders/:id', ProductController.getProductsByOrderId);
