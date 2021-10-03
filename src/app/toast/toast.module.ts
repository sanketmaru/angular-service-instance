import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToastComponent } from "./toast.component";
import { ToastService } from "./toast.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  exports: [ToastComponent]
})
export class ToastModule { }
