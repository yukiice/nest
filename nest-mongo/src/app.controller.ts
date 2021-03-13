import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('Blog')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary:'首页'})
  getHello(): string {
    return this.appService.getHello();
  }
}
