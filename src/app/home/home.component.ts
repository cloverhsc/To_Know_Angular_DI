import { NotificationService } from './../service/notification.service';
import { Component, OnInit } from '@angular/core';
import { SMSService } from '../service/smsservice.service';
import { LogService } from '../service/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private notificationService: NotificationService;
  title = 'home works';

  constructor() {
    this.notificationService = new NotificationService(
      new SMSService(new LogService())
    );
  }

  ngOnInit(): void {
    this.title = this.notificationService.showMessage();
  }
}
