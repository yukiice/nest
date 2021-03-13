import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DogsController } from './dogs/dogs.controller';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, DogsController, PostsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    await consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
