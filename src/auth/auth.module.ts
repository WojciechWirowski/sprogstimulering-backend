import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: "U634iP5ogPy%U1UeFHUj5$cb%YrLm$FexzhEpVxQ8hX8zvnL",
    signOptions: {expiresIn: '300s'}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
