import { Controller, Get, Header, Param, Res } from '@nestjs/common'
import { Response } from 'Express'
import { PagesService } from './pages.service'

@Controller('api/page')
export class PagesController {
  constructor(private readonly _pagesService: PagesService) {}

  @Get('/list')
  getAll() {
    return this._pagesService.getList()
  }

  @Get('/:name')
  @Header('Content-Type', 'application/text')
  getArticle(@Res() res: Response, @Param('name') name: string) {
    const fileStream = this._pagesService.getArticle(name)
    fileStream.pipe(res)
  }
}
