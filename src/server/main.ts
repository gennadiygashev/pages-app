import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import * as path from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.setBaseViewsDir(path.join(__dirname, 'views'))
  app.set('view engine', 'js')
  app.engine('js', require('express-react-views').createEngine())
  app.useStaticAssets('public')

  await app.listen(3000)
}
bootstrap()
