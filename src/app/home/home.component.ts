import { NotificationService } from './../service/notification.service';
import { Component, OnInit } from '@angular/core';
import { SMSService } from '../service/smsservice.service';
import { LogService } from '../service/log.service';
import { AzureSMSService } from '../service/Azure.service';
import { NotificationServiceFactory } from '../factory/notification-factory';
import { ISendable } from '../Interface/i-sendable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: NotificationService, useClass: NotificationService },
    { provide: SMSService, useClass: SMSService },
    // { provide: ISendable, useClass: SMSService },
    // { provide: SMSService, useClass: AzureSMSService },
  ],
})
export class HomeComponent implements OnInit {
  // private notificationService: NotificationService;
  title = 'home works';

  /** Non-DI pattern  */
  // constructor() {
  //   /** Original SMSService */
  //   // this.notificationService = new NotificationService(
  //   //   new SMSService(new LogService())
  //   // );

  //   /** Change to Azure SMS service */
  //   // this.notificationService = new NotificationService(
  //   //   new AzureSMSService(new LogService())
  //   // );

  //   /** Factory pattern */
  //   // this.notificationService =
  //   //   NotificationServiceFactory.createNotificationService();
  // }

  /** DI Pattern */
  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    this.title = this.notificationService.showMessage();
    this.notificationService.printMessage();
  }
}
