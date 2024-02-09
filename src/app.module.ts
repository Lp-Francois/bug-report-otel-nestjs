import { AppController } from './app.controller';
import { Logger, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
    pinoHttp: 
      {
        level: 'debug',
        base: undefined, // removes pid and hostname
        // transport: { 
        //   target: 'pino-pretty', 
        //   options: {
        //     colorize: true,
        //     messageFormat: '{traceId}'
        //   },
        // },
      }
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
