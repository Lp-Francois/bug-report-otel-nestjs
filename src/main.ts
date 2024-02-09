import otelSDK from './tracing';
otelSDK.start();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(Logger)
  app.useLogger(logger);
  await app.listen(3002);
  logger.log(`Application is running on: http://localhost:3002`);
  logger.log(``);
  logger.log(`Access: http://localhost:3002/`);
  logger.log(`Access: http://localhost:3002/hello`);
  logger.log(`Access: http://localhost:3002/world`);
  logger.log(``);

}
bootstrap();
