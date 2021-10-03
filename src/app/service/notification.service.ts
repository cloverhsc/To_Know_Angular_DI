import { SMSService } from './smsservice.service';
import { Injectable } from '@angular/core';
import { ISendable } from '../Interface/i-sendable';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private smsService: SMSService;
  constructor(smsServ: SMSService) {
    this.smsService = smsServ;
  }

  showMessage(): string {
    return this.smsService.sendMessage();
  }
}
