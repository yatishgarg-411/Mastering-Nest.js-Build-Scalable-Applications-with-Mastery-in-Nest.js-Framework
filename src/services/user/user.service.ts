import { Injectable } from '@nestjs/common';
import {UserDTO} from '../../userDTO/user.dto';
@Injectable()
export class UserService {
    private users: UserDTO[]=[];

    addUser(userData:UserDTO){
        this.users.push(userData);
        console.log(this.users);
    }

    getUsers(){
        return this.users;
    }
}



