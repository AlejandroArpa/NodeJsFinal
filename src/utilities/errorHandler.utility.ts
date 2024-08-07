import { Request, Response, NextFunction } from 'express';
import { mapErrorToResponse } from './';

function errorHandler(err: Error, req: Request, res: Response) {
    const { statusCode, message } = mapErrorToResponse(err);
    return res.status(statusCode).json({ message });
}

export { errorHandler };