import { Component } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  // providers: [ToastService]
})
export class AccountComponent {
  value = "service-types";
  messageCount: number = 0;
  constructor(private toastService: ToastService) {
    this.messageCount = this.toastService.getMessageCount();
  }

  onClick() {
    this.toastService.create(this.value);
    this.toastService.increaseMessagCount();
    this.messageCount = this.toastService.getMessageCount();
  }

}
