import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
async function bootstrap() {
  // // 连接mongodb数据
  mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: 'test',
  });
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('CRUD文档')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
