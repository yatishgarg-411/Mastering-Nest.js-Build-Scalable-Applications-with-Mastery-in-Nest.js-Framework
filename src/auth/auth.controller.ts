import { Controller, Get,Param,Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { authDto } from './auth.dto';
import { PhoneAuthPipe } from './customPipe/phoneAuth';

@Controller('auth')
export class AuthController {


    @Get('register/:id')
    @UsePipes(PhoneAuthPipe)
    getData(@Param('id') id:string){
        return {id};
    }

    @Post('register')
    @UsePipes(ValidationPipe, PhoneAuthPipe)
    registerUser(@Body() authParams:authDto){
        return {
            Email: `${authParams.email}`
        }
    }
}
