import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UsersCreateDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(): Promise<User[]> {
    return this.usersService.getUser();
  }

  @Post()
  createUser(@Body() user: UsersCreateDto): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  updateUser(
    @Body() user: UsersCreateDto,
    @Param('id') id: number,
  ): Promise<User> {
    return this.usersService.updateUser(user, id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<string> {
    return this.usersService.deleteUser(id);
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<User> {
    return this.usersService.findUserById(id);
  }
}
