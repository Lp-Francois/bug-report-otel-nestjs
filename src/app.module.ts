import { AppController } from './app.controller';
import { Logger, Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Logger],
})
export class AppModule {}
