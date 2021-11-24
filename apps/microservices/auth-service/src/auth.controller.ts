import { Controller, Get } from '@nestjs/common';
import { Microservices/authService } from './microservices/auth.service';

@Controller()
export class Microservices/authController {
  constructor(private readonly microservices/authService: Microservices/authService) {}

  @Get()
  getHello(): string {
    return this.microservices/authService.getHello();
  }
}
