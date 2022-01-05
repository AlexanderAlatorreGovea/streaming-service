import { IsEmail, IsNumber, IsString } from 'class-validator';

export class User {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  confirmPassword: string;

  @IsString()
  password: string;
}
