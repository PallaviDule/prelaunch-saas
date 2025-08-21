import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('onboard')
  onboard(@Body() createUserDto: CreateUserDto) {
    return this.usersService.onboardUser(createUserDto);
  }

  @Delete(':id/offboard')
  offboard(@Param('id') id: string) {
    return this.usersService.offboardUser(id);
  }

  @Get()
  getAll(): User[] {
    return this.usersService.getAllUsers();
  }
}
