import { SMSService } from './smsservice.service';
import { Injectable } from '@angular/core';
import { ISendable } from '../Interface/i-sendable';
import { IPrintable } from '../Interface/i-printable';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  /** Non-ISP principle */
  private smsService: SMSService;
  constructor(smsServ: SMSService) {
    this.smsService = smsServ;
  }

  /** ISP Principle
   * @description now we don't need to import full SMSService
   */
  // constructor(private smsService: ISendable) {}

  /**
   * showMessage function
   * @returns a string.
   */
  showMessage(): string {
    return this.smsService.sendMessage();
  }

  printMessage(): void {
    this.smsService.printMessage();
  }
}
