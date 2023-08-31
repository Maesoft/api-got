import { Module } from '@nestjs/common';
import { GotModule } from './got/got.module';

@Module({
  imports: [GotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
