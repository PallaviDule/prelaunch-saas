import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { User } from './user.interface';

const DATA_FILE = path.join(__dirname, '../../src/users/data/users.json');

@Injectable()
export class UsersService {
  private readUsers(): User[] {
    const data = fs.readFileSync(DATA_FILE, 'utf8');

    return JSON.parse(data) as User[];
  }

  login({ email, password }: { email: string; password: string }): {
    message: string;
    user: User;
  } {
    const users = this.readUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { message: 'Login successful', user };
  }

  private writeUsers(users: any[]) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
  }

  onboardUser(createUserDto: CreateUserDto) {
    const users = this.readUsers();
    const newUser = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      id: uuid() as string,
      ...createUserDto,
      createdAt: new Date(),
      active: true,
    };
    users.push(newUser);
    this.writeUsers(users);
    return newUser;
  }

  offboardUser(id: string) {
    const users = this.readUsers();
    const user = users.find((user) => user.id === id && user.active);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    user.active = false;
    this.writeUsers(users);
    return { message: `User ${id} offboarded successfully` };
  }

  getAllUsers() {
    return this.readUsers();
  }
}
