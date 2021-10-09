import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = "service-types";
  messageCount: number = 0;
  constructor(private router: Router, private toastService: ToastService) { }
  onUserClick() {
    this.router.navigate(['user']);
  }
  onAccountClick() {
    this.router.navigate(['account']);
  }
  onAppClick() {
    this.toastService.create(this.value);
    this.toastService.increaseMessagCount();
    this.messageCount = this.toastService.getMessageCount();
  }
}
