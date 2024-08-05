import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { ProductService } from "../services/";

export class ProductController {
	static async getAllProducts(_: Request, res: Response, next: NextFunction) {
		const productService = container.resolve(ProductService);
		const products = await productService.getAllProducts();
		res.status(200).json(products);
	}

	static async createProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const productService = container.resolve(ProductService);
			const product = await productService.createProduct(req.body);
			res.status(201).json(product);
		} catch (error) {
			next(error);
		}
	}

	static async deleteProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const productService = container.resolve(ProductService);
			const product = await productService.deleteProduct(parseInt( req.params.id));
			res.status(201).json(product);
		} catch (error) {
			next(error);
		}
	}

	static async updateProduct(req: Request, res: Response, next: NextFunction){
		try {
			const productService = container.resolve(ProductService);
			const product = await productService.updateProduct(parseInt( req.params.id), req.body);
			res.status(200).json(product);
		} catch (error) {
			next(error);
		}
	}
}