import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(userName: string, password: string): Promise<any> {
    const user = await this.userService.findOne(userName);

    if (
      user?.password === password &&
      user?.password === user?.confirmPassword
    ) {
      const { password, confirmPassword, ...result } = user;

      return result;
    }

    return null;
  }
}
