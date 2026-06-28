import { Controller, Get,Post, ParseArrayPipe, Query, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import type {Request} from 'express';
import { UserService } from './services/user/user.service';
import { UserDTO } from './userDTO/user.dto';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly userService: UserService) {}

  @Post('user')
  addUser(@Body() userData: UserDTO) {
    return {message:'User added successfully'};
  }

  @Get('user')
  allUsers(){
    return this.userService.getUsers();
  }
  // //Testing Middleware
  // // @Post()
  // // testingMiddleware(){
  // //   return('Middleware is working');
  // // }
  // @Post('client')
  // checkContent(){
  //   return {message:'Content type is valid'};
  // }
  // @Post('route4')
  // checkCoontent1(){
  //   return {message:'Content type is valid'};
  // }
  // // @Get()
  // // gettingToken(@Req() request:Request){
  // //   const token= request['token'];
  // //   return {message:'Authorized',token};
  // // }

  // // Parse query string values like "1,2,3" into number[]
  // @Get('numbers')
  // getArray(@Query('numbers', new ParseArrayPipe({ items: Number })) numbers:number[]){
  //   return {numbers};
  // }

  // @Get('query')
  // getRe(@Query('name') name:string){
  //   return {name};
  // }

  // @Get('request/:id')
  // getRequest(@Req() request: Request){
  //   const id = request.params;
  //   const query = request.query;
  //   const userAgent = request.headers['user-agent'];
  //   return {id, query,userAgent
  //   };
  // }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
