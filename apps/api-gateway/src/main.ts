import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.API_GATEWAY_PORT || 4000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    Logger.log(`Api-Gateway is listening on ${port}`);
  });
}
bootstrap();
