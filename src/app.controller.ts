import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import type {Request} from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRe(@Query('name') name:string){
    return {name};
  }
  @Get(':id')
  getRequest(@Req() request: Request){
    const id = request.params;
    const query = request.query;
    const userAgent = request.headers['user-agent'];
    return {id, query,userAgent
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
