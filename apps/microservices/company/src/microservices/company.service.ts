import { Injectable } from '@nestjs/common';

@Injectable()
export class Microservices/companyService {
  getHello(): string {
    return 'Hello World!';
  }
}
