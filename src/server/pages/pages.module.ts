import { Module } from '@nestjs/common'
import { PagesService } from './pages.service'
import { ConfigService } from '@nestjs/config'
import { PagesController } from './pages.controller'

@Module({
  providers: [PagesService, ConfigService],
  controllers: [PagesController]
})
export class PagesModule {}
