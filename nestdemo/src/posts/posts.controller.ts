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
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

export class CreatePostDto {
  // 内容描述
  @ApiProperty({ description: '帖子标题',example:'帖子标题1' })
  title: string;
  @ApiProperty({ description: '帖子内容' ,example:'帖子内容1'})
  content: string;
}

@Controller('posts')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '帖子列表' })
  async index() {
    return await PostModel.find();
  }

  @Post()
  @ApiOperation({ summary: '添加帖子' })
  async create(
    @Body() createPostDto: CreatePostDto,
    @Query() query,
    @Param() param,
  ) {
    await PostModel.create(createPostDto);
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '获取帖子带参数' })
  async detail(@Param('id') id: string) {
    return await PostModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param(':id') id: string, @Body() body: CreatePostDto) {
    return  await PostModel.findById
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param('id') id: string) {
    return {
      success: true,
    };
  }
}
