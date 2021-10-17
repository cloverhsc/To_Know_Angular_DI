import { LogService } from '../service/log.service';
import { NotificationService } from '../service/notification.service';
import { SMSService } from '../service/smsservice.service';

export class NotificationServiceFactory {
  static createNotificationService(): NotificationService {
    return new NotificationService(this.createSMSService());
  }

  static createSMSService(): SMSService {
    return new SMSService(new LogService());
  }
}
