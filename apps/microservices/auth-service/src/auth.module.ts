import { Module } from '@nestjs/common';
import { Microservices/authController } from './microservices/auth.controller';
import { Microservices/authService } from './microservices/auth.service';

@Module({
  imports: [],
  controllers: [Microservices/authController],
  providers: [Microservices/authService],
})
export class Microservices/authModule {}
