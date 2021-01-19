import { Controller, Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post('register')
    create(@Body() user: User) {
        return this.userService.createUser(user);
    }
}
