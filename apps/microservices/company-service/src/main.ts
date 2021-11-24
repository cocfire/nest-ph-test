import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Company-Service');

async function bootstrap() {
  const host = process.env.COMPANY_SERVICE_HOST || '0.0.0.0';
  const port = process.env.COMPANY_SERVICE_PORT || 4003;

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host,
      port,
    },
  });
  
  await app.listen();
  logger.log(`Company-service is listening on port: ${port}`);
}
bootstrap();
