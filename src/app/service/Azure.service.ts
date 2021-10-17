import { SMSService } from './smsservice.service';

export class AzureSMSService extends SMSService {
  printMessage(): void {
    console.log('Print Azure Message');
  }

  sendMessage(): string {
    return 'Send Azure Message';
  }
}
