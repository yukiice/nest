import { Controller, Get,HttpException,HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
@Controller()
@ApiTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary:'显示列表'}) 
  getHello(): string {
    return this.appService.getHello();
  }
  
}
