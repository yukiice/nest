import { Controller,Get,Req } from '@nestjs/common';
import { Request } from "express";
@Controller('basic')
export class BasicController {
    @Get()
    findAll(@Req() request:Request):string{
        console.log(request.originalUrl)
        return `why are you so serious`
    }
}
