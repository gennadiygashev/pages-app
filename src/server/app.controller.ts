import { Controller, Get, Render } from '@nestjs/common'

@Controller('/')
export class AppController {
  @Get(['', 'page', 'page/*'])
  @Render('layout')
  pages() {}
}
