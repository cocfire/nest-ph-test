import { NestFactory } from '@nestjs/core';
import { Microservices/authModule } from './microservices/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(Microservices/authModule);
  await app.listen(4001);
}
bootstrap();
