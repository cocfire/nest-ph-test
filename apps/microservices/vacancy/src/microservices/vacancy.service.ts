import { Injectable } from '@nestjs/common';

@Injectable()
export class Microservices/vacancyService {
  getHello(): string {
    return 'Hello World!';
  }
}
