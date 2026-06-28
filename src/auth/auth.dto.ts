import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class authDto {
    @IsEmail()
    @IsNotEmpty()
    email: string='';

    @IsAlphanumeric()
    @IsNotEmpty()
    @Length(3,10,
        {message:'Password must be $constraint1 to $constraint2 characters long in $property'}
    )
    password: string='';



    
    @IsNotEmpty()
    phone: string='';
}