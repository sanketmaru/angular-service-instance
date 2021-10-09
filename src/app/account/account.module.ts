import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { ToastModule } from '../toast/toast.module';
import { ToastService } from '../toast/toast.service';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ToastModule
  ],
  providers: [ToastService],
  exports: [ToastModule]
})
export class AccountModule { }
