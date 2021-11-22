import { Controller, Get } from '@nestjs/common';
import { Microservices/userService } from './microservices/user.service';

@Controller()
export class Microservices/userController {
  constructor(private readonly microservices/userService: Microservices/userService) {}

  @Get()
  getHello(): string {
    return this.microservices/userService.getHello();
  }
}
