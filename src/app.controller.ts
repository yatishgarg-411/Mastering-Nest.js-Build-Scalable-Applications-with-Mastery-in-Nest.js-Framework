import { Controller, Get, ParseArrayPipe, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import type {Request} from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Parse query string values like "1,2,3" into number[]
  @Get('numbers')
  getArray(@Query('numbers', new ParseArrayPipe({ items: Number })) numbers:number[]){
    return {numbers};
  }

  @Get('query')
  getRe(@Query('name') name:string){
    return {name};
  }

  @Get('request/:id')
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
