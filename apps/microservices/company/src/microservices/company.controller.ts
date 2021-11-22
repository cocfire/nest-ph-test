import { Controller, Get } from '@nestjs/common';
import { Microservices/companyService } from './microservices/company.service';

@Controller()
export class Microservices/companyController {
  constructor(private readonly microservices/companyService: Microservices/companyService) {}

  @Get()
  getHello(): string {
    return this.microservices/companyService.getHello();
  }
}
