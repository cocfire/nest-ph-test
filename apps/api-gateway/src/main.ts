import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { LoggerInterceptor } from './interceptors/logger.interceptor';

const logger = new Logger(`Api-Gateway`);

async function bootstrap() {
  const port = process.env.API_GATEWAY_PORT || 4000;
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    Logger.log(`Api-Gateway is listening on ${port}`);
  });
}
bootstrap();
