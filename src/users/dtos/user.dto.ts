import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
