import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    await user.save();

    delete user.password;
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);

    delete user.password;
    return user;
  }

  async findById(id: number) {
    return await this.repo.findOne(id);
  }

  async findByEmail(email: string) {
    return await this.repo.findOne({
      where: {
        email,
      },
    });
  }
}
