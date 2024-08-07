import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProductService } from "../services/";
import { errorHandler } from "../utilities";

export class ProductController {
	static async getAllProducts(_: Request, res: Response) {
		const productService = container.resolve(ProductService);
		const products = await productService.getAllProducts();
		res.status(200).json(products);
	}

	static async getProductsByOrderId(req: Request, res: Response) {
		try {
			const productService = container.resolve(ProductService);
			const products = await productService.getProductsByOrderId(parseInt(req.params.id));
			res.status(200).json(products);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}
	
	static async createProduct(req: Request, res: Response) {
		try {
			const productService = container.resolve(ProductService);
			const product = await productService.createProduct(req.body);
			res.status(201).json(product);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}

	static async deleteProduct(req: Request, res: Response) {
		try {
			const productService = container.resolve(ProductService);
			const product = await productService.deleteProduct(parseInt( req.params.id));
			res.status(201).json(product);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}

	static async updateProduct(req: Request, res: Response){
		try {
			const productService = container.resolve(ProductService);
			const product = await productService.updateProduct(parseInt( req.params.id), req.body);
			res.status(200).json(product);
		} catch (error) {
			if(error instanceof Error){
				errorHandler(error, req, res);
			}
		}
	}
}