import { Body, Controller, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  createNewUser(@Body() user: User) {
    console.log(`Just for test`);
    return this.userService.create(user);
  }

  @MessagePattern({ cmd: 'findByUserName' })
  async findUserByUserName(username: string) {
    console.log(`User-Service.UserController.findByUserName: ${username}`)
    return this.userService.findByUserName(username);
  }
}
