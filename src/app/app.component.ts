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
  constructor(private router: Router) { }
  onUserClick() {
    this.router.navigate(['user']);
  }
  onAccountClick() {
    this.router.navigate(['account']);
  }
}
