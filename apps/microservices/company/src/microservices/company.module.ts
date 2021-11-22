import { Module } from '@nestjs/common';
import { Microservices/companyController } from './microservices/company.controller';
import { Microservices/companyService } from './microservices/company.service';

@Module({
  imports: [],
  controllers: [Microservices/companyController],
  providers: [Microservices/companyService],
})
export class Microservices/companyModule {}
