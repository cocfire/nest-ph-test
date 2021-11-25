import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TokenDto } from '../dtos/token.dto';
import { LoginDto } from '../dtos/login.dto';
import { NotFoundInterceptor } from '../interceptors/notfound.Interceptor';

@Controller()
export class AuthController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
  ) { }

  @Post('/login')
  @UseInterceptors(new NotFoundInterceptor('User does not exist'))
  async userlogin(@Body() loginDto: LoginDto) {
    console.log(`Api-gateway.AuthController.userlogin: user ${loginDto.username} is login`);
    const user = await this.userService.send({ cmd: 'findByUserName' }, loginDto.username).toPromise();

    //check password
    if (!user || (user && user.password !== loginDto.password)) {
      throw new ForbiddenException(`Incorrect password`);
    }

    //create token
    const token: TokenDto = {
      _id: user._id,
      name: user.name,
      username: user.username,
      role: user.role,
      companyId: user.companyId,
      access_token: ""
    }
    token.access_token = await this.authService.send({ cmd: 'createToken' }, token).toPromise();

    return token;
  }

  @Post('/checkToken')
  async checkToken(@Body('jwt') jwt: string) {
    return this.authService.send({ cmd: 'checkToken' }, jwt);
  }
}
