import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { IPrintable } from '../Interface/i-printable';
import { ISendable } from '../Interface/i-sendable';

@Injectable({
  providedIn: 'root',
})

/**
 * SMSService.
 * @description follow ISP principle implement IPrintable and ISendable
 * to decouple PrintMessage() and sendMessage().
 */
export class SMSService implements IPrintable, ISendable {
  private logService: LogService;
  constructor(logServ: LogService) {
    this.logService = logServ;
  }

  printMessage(): void {
    console.log('Print Message');
  }

  sendMessage(): string {
    return 'Send Message';
  }
}
