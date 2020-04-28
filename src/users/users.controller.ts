import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(): string {
    return this.usersService.getUser();
  }

  @Post()
  createUser(): string {
    return this.usersService.createUser();
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
