import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Auth-Service');

async function bootstrap() {
  const host = process.env.AUTH_SERVICE_HOST || '0.0.0.0';
  const port = process.env.AUTH_SERVICE_PORT || 4001;

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host,
      port,
    },
  });
  
  await app.listen();
  logger.log(`Auth-service is listening on port: ${port}`);
}
bootstrap();
