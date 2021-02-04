import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import { promisify } from 'util'
import { ConfigService } from '@nestjs/config'
import * as path from 'path'
import { PagesListResponse } from './pages.types'
const promisifiedReadDir = promisify(fs.readdir)

@Injectable()
export class PagesService {
  constructor(private readonly _configService: ConfigService) {}

  getList(): Promise<PagesListResponse> {
    return promisifiedReadDir(path.join(this._configService.get('dataPath')))
  }

  getArticle(name: string) {
    return fs.createReadStream(
      path.join(this._configService.get('dataPath'), name)
    )
  }
}
