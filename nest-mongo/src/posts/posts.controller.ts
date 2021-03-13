import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreatePostDto } from './dto/createPost.dto';
import { Post as PostSchema } from './model/post.model';

@Controller('posts')
export class PostsController {
  constructor(
    @InjectModel(PostSchema)
    private readonly Posts: ReturnModelType<typeof PostSchema>,
  ) {}
  @Get()
  @ApiOperation({ summary: '帖子列表' })
  async index() {
    return await this.Posts.find();
  }
  @Post()
  @ApiOperation({ summary: '添加帖子' })
  async create(
    @Body() createPostDto: CreatePostDto,
    @Query() query,
    @Param() param,
  ) {
    await this.Posts.create(createPostDto);
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '获取帖子带参数' })
  async detail(@Param('id') id: string) {
    return await this.Posts.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
    await this.Posts.findByIdAndUpdate(id, updatePostDto);
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.Posts.findByIdAndDelete(id);
    return {
      success: true,
    };
  }
}
