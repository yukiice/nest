import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // 引入验证管道
  app.useGlobalPipes(new ValidationPipe())


  // 引入swagger
  const options = new DocumentBuilder()
    .setTitle('myblog')
    .setDescription('a simple blog')
    .setVersion('1.0')
    .addTag('blog')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(3000);
}
bootstrap();
