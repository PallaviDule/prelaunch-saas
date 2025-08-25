import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.interface';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}
  // Auth Service
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  logout(@Body() loginDto: LoginDto) {
    return { message: 'Logged out successfully' };
  }

  // User Service
  @Post('onboard')
  onboard(@Body() createUserDto: CreateUserDto) {
    return this.usersService.onboardUser(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @Get()
  getAll(): User[] {
    return this.usersService.getAllUsers();
  }
}
