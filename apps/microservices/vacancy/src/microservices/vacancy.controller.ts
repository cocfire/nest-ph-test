import { Controller, Get } from '@nestjs/common';
import { Microservices/vacancyService } from './microservices/vacancy.service';

@Controller()
export class Microservices/vacancyController {
  constructor(private readonly microservices/vacancyService: Microservices/vacancyService) {}

  @Get()
  getHello(): string {
    return this.microservices/vacancyService.getHello();
  }
}
