import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Vacancy-Service');

async function bootstrap() {
  const host = process.env.VACANCY_SERVICE_HOST || '0.0.0.0';
  const port = process.env.VACANCY_SERVICE_PORT || 4004;

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host,
      port,
    },
  });
  
  await app.listen();
  logger.log(`Vacancy-service is listening on port: ${port}`);
}
bootstrap();
