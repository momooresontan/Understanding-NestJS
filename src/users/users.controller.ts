import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): any {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): any {
    //TODO: auto parse ID
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto): any {
    return this.usersService.createUser();
  }
}
