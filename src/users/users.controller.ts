import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UsersCreateDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(): string {
    return this.usersService.getUser();
  }

  @Post()
  async createUser(@Body() user: UsersCreateDto): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Put()
  updateUser(): string {
    return this.usersService.updateUser();
  }

  @Delete()
  deleteUser(): string {
    return this.usersService.deleteUser();
  }
}
