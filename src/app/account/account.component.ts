import { Component } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  value = "service-types";
  constructor(private toastService: ToastService) { }

  onClick() {
    this.toastService.create(this.value);
  }

}
