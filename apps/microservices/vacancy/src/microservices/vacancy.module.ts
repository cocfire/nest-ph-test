import { Module } from '@nestjs/common';
import { Microservices/vacancyController } from './microservices/vacancy.controller';
import { Microservices/vacancyService } from './microservices/vacancy.service';

@Module({
  imports: [],
  controllers: [Microservices/vacancyController],
  providers: [Microservices/vacancyService],
})
export class Microservices/vacancyModule {}
