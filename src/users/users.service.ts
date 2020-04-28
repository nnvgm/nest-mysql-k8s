import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UsersCreateDto } from './users.dto';

@Injectable()
export class UsersService {
  getUser(): string {
    return 'Get User';
  }

  async createUser(user: UsersCreateDto): Promise<User> {
    // return 'Create User';
  }

  updateUser(): string {
    return 'Update User';
  }

  deleteUser(): string {
    return 'Delete User';
  }
}
