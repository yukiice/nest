import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { CatService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from "./dto/create-car.dto";
@Controller('cats')
export class CatsController {
  constructor(private catService: CatService) {}
  // 这里告诉http 这是get请求

  @Post()
  @HttpCode(205)
  async create(@Body() createCatDto:CreateCatDto) {
    this.catService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
  
}
