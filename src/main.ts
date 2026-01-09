import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  const globalPipes = new ValidationPipe();
  app.useGlobalPipes(globalPipes);
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
