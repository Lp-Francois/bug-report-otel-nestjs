import { Controller, Get, Logger, Response } from '@nestjs/common';
import { Headers } from '@nestjs/common';
// import { trace, context } from '@opentelemetry/api';
import { Response as Res } from 'express';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Get()
  get(@Headers() headers) {
    this.logger.log('[+] endpoint / - getHello');
    this.logger.log('headers received are:', headers);
    // dummy endpoint
    return 'Hello there';
  }

  @Get('hello')
  async getHello(@Headers() headers, @Response() res: Res) {
    this.logger.log('[+] endpoint /hello - getHello()');
    this.logger.log('headers received are:', headers);

    const response = await fetch('http://localhost:3002');
    const worldText = await response.text();

    return res.send('Hello' + worldText);
  }

  @Get('world')
  getWorld(@Headers() headers, @Response() res: Res) {
    this.logger.log('[+] /getWorld - getWorld()');
    this.logger.log('headers received are:', headers);

    return res.send('World');
  }
}
