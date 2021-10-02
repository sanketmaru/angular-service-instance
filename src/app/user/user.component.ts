import { Component } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  value = "service-types";
  constructor(private toastService: ToastService) { }

  onClick() {
    this.toastService.create(this.value);
  }

}
