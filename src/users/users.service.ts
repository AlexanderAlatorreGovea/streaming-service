import { Injectable } from '@nestjs/common';
import { User } from './dtos/user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      confirmPassword: 'changeme',
      email: 'alexander@gmail.com',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
      confirmPassword: 'guess',
      email: 'alexander@gmail.com',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
