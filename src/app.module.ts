import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GotController } from './got/got.controller';
import { GotService } from './got/got.service';

@Module({
  imports: [],
  controllers: [AppController, GotController],
  providers: [AppService, GotService],
})
export class AppModule {}
