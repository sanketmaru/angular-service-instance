import { Component } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  // providers: [ToastService]
})
export class UserComponent {
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
