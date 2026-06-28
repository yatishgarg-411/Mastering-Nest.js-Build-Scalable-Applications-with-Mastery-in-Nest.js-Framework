import { IsAlphanumeric, IsNotEmpty, isNotEmpty, IsString, MaxLength, MinLength } from "class-validator"


export class UserDTO{

    @IsString()
    @IsNotEmpty({message:'Name is required'})
    @MaxLength(20, {message:'Maximum allowed length is $constraint1'})
    readonly name: string = '';

    @IsString()
    @IsNotEmpty({message:'Password is required'})
    @IsAlphanumeric()
    @MinLength(8,{
        message:'Minimum allowed length is $constraint1'
    })
    readonly password: string = '';


    readonly createdAt?: string;

}