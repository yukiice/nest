import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post as PostSchema } from './model/post.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
@Module({
  imports: [TypegooseModule.forFeature([PostSchema])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
