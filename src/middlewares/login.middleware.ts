import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoginMiddleWare implements NestMiddleware {
    use(req:Request, res:Response, next: NextFunction) {
        const date = new Date();
        console.log(date);
        next();
    }
}