import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthService} from "./auth/auth.service";
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import {LoginDto} from "./users/dto/loginDto";
import {LocalAuthGuard} from "./auth/local-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/register')
  async register(@Body() user: LoginDto ) {
    return this.authService.register(user)
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: LoginDto ) {
    return this.authService.login(user);
  }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
