import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger(`Graphql-server`);

async function bootstrap() {
  const port = process.env.GRAPHQL_SERVER_PORT || 4000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    logger.log(`Graphql-server is listening on ${port}`);
  });
}
bootstrap();
