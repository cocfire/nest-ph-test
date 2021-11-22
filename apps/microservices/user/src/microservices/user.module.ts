import { Module } from '@nestjs/common';
import { Microservices/userController } from './microservices/user.controller';
import { Microservices/userService } from './microservices/user.service';

@Module({
  imports: [],
  controllers: [Microservices/userController],
  providers: [Microservices/userService],
})
export class Microservices/userModule {}
