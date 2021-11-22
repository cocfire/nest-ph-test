import { Injectable } from '@nestjs/common';

@Injectable()
export class Microservices/userService {
  getHello(): string {
    return 'Hello World!';
  }
}
