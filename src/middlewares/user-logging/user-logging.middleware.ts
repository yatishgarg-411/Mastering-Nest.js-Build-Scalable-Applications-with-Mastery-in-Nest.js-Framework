import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from '../../services/user/user.service';
import bcrypt from 'bcrypt';
import { UserDTO } from '../../userDTO/user.dto';
@Injectable()
export class UserLoggingMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  async use(req: Request, res: Response, next: () => void) {
    console.log('Middleware called');
    if(req.body && req.body?.name) {
      console.log(`User name: ${req.body.name}`);
      req.body.name=req.body.name.toUpperCase();
    }
    if(req.body && req.body.name && req.body.password){
      const hashedPass=await bcrypt.hash(req.body.password,10);
      const createUser: UserDTO = {
      name: req.body.name,
      password:hashedPass,
      createdAt: new Date().toISOString()
    }

    this.userService.addUser(createUser);
    }

    

    next();
  }
}
