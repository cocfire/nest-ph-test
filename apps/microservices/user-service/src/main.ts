import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('User-Service');

async function bootstrap() {
  const host = process.env.USER_SERVICE_HOST || '0.0.0.0';
  const port = process.env.USER_SERVICE_PORT || 4002;

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host,
      port,
    },
  });
  
  await app.listen();
  logger.log(`User-service is listening on port: ${port}`);
}
bootstrap();
