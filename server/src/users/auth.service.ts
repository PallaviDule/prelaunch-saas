import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './user.interface';
import { UsersRepository } from 'src/users/users.repository';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepo: UsersRepository) {}

  login({ email, password }: LoginDto): {
    message: string;
    user: Omit<User, 'password'>;
  } {
    const user = this.userRepo.findByEmail(email);

    // console.log('User:', user, 'And users:', users);
    if (!user || String(user.password) !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...safeUser } = user;

    return { message: 'Login successful', user: safeUser };
  }
}
