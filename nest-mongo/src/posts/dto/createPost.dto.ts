import { IsNotEmpty, IsString } from 'class-validator';
import {  ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  // 内容描述
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
  title: string;
  @IsString()
  @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
  content: string;
}
