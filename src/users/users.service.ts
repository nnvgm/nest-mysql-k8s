import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(): string {
    return 'Get User';
  }

  createUser(): string {
    return 'Create User';
  }

  updateUser(): string {
    return 'Update User';
  }

  deleteUser(): string {
    return 'Delete User';
  }
}
