import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SMSService {
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
