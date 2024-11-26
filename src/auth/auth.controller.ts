import { Controller, Post, Body, Get } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { GetUser, Auth } from './decorators';
import { User } from './entities/user.entity';
import { ValidRoles } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUser: LoginUserDto) {
    return this.authService.login(loginUser);
  }

  @Get('refresh-token')
  @Auth()
  checkAuthStatus(@GetUser('id') id: string) {
    return this.authService.checkAuthStatus(id);
  }

  @Get('private')
  @Auth(ValidRoles.superUser)
  testingPrivateRoute3(@GetUser() user: User) {
    return {
      ok: true,
      message: 'Hola mundo private',
      user,
    };
  }
}
