import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  constructor() {}
  @Get()
  async findAll() {
    throw new HttpException({
        status:HttpStatus.FORBIDDEN,
        error:'这是故意的！'
    }, HttpStatus.FORBIDDEN);
  }
}
