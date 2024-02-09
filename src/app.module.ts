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

        transport: { 
          target: 'pino-pretty', 
          options: {
            colorize: true,
            ignore: "pid,hostname,level,time",
            translateTime: false,
            singleLine: false,
            hideObject: true,
            messageFormat: "[Nest] {if traceId}[trace={traceId}]{end}{if context}[{context}] {end} {msg}"
            // messageFormat: (log, messageKey, levelLabel) => {
            //   if (log?.traceId) return `${messageKey} + ${log.traceId}`
            //   // do some log message customization
            //   return messageKey;
            // }
          },
        },
      }
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
