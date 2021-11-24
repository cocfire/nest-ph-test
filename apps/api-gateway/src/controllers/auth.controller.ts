import {
  Body,
  Controller,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from '../dtos/login.dto';

@Controller()
export class AuthController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
  ) { }

  @Post('/login')
  userlogin(@Body() loginDto: LoginDto) {
    console.log(`AuthController.userlogin: user ${loginDto.username} is loging`)
    return this.userService.send<string>({ cmd: 'findByUserName' }, loginDto.username);
  }
}
