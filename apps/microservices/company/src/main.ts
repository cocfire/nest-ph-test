import { NestFactory } from '@nestjs/core';
import { Microservices/companyModule } from './microservices/company.module';

async function bootstrap() {
  const app = await NestFactory.create(Microservices/companyModule);
  await app.listen(3000);
}
bootstrap();
