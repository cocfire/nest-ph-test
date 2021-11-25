import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern({ cmd: 'createToken' })
  async createToken(user: any) {
    console.log(`Auth-Service.AuthController.createToken: ${user.username}`)
    return this.authService.createToken(user);
  }

  @MessagePattern({ cmd: 'checkToken' })
  async checkToken(jwt: any) {
    console.log(`Auth-Service.AuthController.checkToken: Checking token`)
    return this.authService.checkToken(jwt);
  }
}
