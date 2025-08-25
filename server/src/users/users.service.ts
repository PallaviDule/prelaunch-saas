import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import { UsersRepository } from 'src/users/users.repository';

@Injectable() // attaches metadata to the class, signaling that this service is a class that can be managed by the Nest IoC container.
export class UsersService {
  constructor(private readonly userRepo: UsersRepository) {}

  onboardUser(createUserDto: CreateUserDto) {
    const users = this.userRepo.fetchAllUsers();
    const newUser = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      id: uuid() as string,
      ...createUserDto,
      createdAt: new Date(),
      active: true,
    };
    users.push(newUser);
    this.userRepo.saveUsers(users);
    return newUser;
  }

  deleteUser(id: string) {
    const users = this.userRepo.fetchAllUsers();
    const index = users.findIndex((user) => user.id === id);

    if (index === -1)
      throw new NotFoundException(`User with id ${id} not found`);

    users.splice(index, 1);
    this.userRepo.saveUsers(users);
    return { message: `User ${id} offboarded successfully` };
  }

  getAllUsers() {
    return this.userRepo.fetchAllUsers();
  }
}
