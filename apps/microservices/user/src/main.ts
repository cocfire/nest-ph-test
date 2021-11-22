import { NestFactory } from '@nestjs/core';
import { Microservices/userModule } from './microservices/user.module';

async function bootstrap() {
  const app = await NestFactory.create(Microservices/userModule);
  await app.listen(3000);
}
bootstrap();
