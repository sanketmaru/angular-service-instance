import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ToastService } from "./toast.service";

@Component({
  selector: "app-toast",
  styleUrls: ["toast.component.css"],
  templateUrl: "toast.component.html"
})
export class ToastComponent implements OnInit {
  messages: string[] = [];
  serviceLink: Subscription = new Subscription;

  constructor(public toastService: ToastService) { }

  ngOnInit() {
    // subscribe to messages
    console.log("Initialising subscription");
    this.serviceLink = this.toastService.getMessages().subscribe((message) => {
      this.messages.push(message);
      setTimeout(() => this.messages.shift(), 2000);
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.serviceLink.unsubscribe();
  }
}
