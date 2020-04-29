import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './users.entity';
import { UsersCreateDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUser(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }

  async createUser(userDto: UsersCreateDto): Promise<User> {
    const { name, age } = userDto;

    const newUser = new User();
    newUser.name = name;
    newUser.age = age;

    await this.userRepository.save(newUser);

    return newUser;
  }

  async updateUser(userDto: UsersCreateDto, id: number): Promise<User> {
    const { name, age } = userDto;
    const user = await this.userRepository.findOne(id);
    user.name = name;
    user.age = age;

    this.userRepository.save(user);

    return user;
  }

  async deleteUser(id: number): Promise<string> {
    try {
      await this.userRepository.delete(id);

      return 'Delete User Success';
    } catch (error) {
      console.log(error);
      return 'Delete User Failed';
    }
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    return user;
  }
}
