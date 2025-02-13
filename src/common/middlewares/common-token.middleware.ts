import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class CommoTokenMiddleware implements NestMiddleware {
    use(req: Request, es: Response, next: NextFunction) {
        const authorization = req?.header('authorization');
        if (!authorization) {
            throw new HttpException(
                'Token is required',
                HttpStatus.UNAUTHORIZED,
            )
        }

        const token = authorization?.slice(7);
        if (!token) {
            throw new HttpException(
                'Token is required',
                HttpStatus.UNAUTHORIZED,
            )
        }

        req['token'] = token;

        next();
    }
}