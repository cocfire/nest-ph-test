import { NestFactory } from '@nestjs/core';
import { Microservices/vacancyModule } from './microservices/vacancy.module';

async function bootstrap() {
  const app = await NestFactory.create(Microservices/vacancyModule);
  await app.listen(3000);
}
bootstrap();
