import { Injectable } from '@nestjs/common';

@Injectable()
export class Microservices/authService {
  getHello(): string {
    return 'Hello World!';
  }
}
