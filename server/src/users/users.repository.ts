import * as fs from 'fs';
import { User } from './user.interface';
import path from 'path';
import { Injectable } from '@nestjs/common';

const DATA_FILE = path.join(__dirname, '../../src/users/data/users.json');

@Injectable()
export class UsersRepository {
  private readUsers(): User[] {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf8');

    return JSON.parse(data) as User[];
  }

  private writeUsers(users: User[]) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
  }

  saveUsers(users: User[]) {
    this.writeUsers(users);
  }
  findById(id: string): User | undefined {
    return this.readUsers().find((u) => u.id === id);
  }
  fetchAllUsers(): User[] {
    return this.readUsers();
  }
  findByEmail(email: string): User | undefined {
    return this.readUsers().find(
      (u) => u.email.toLowerCase() === email?.toLowerCase(),
    );
  }
}
