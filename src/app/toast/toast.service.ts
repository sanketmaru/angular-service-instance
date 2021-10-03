import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private messages = new Subject<string>();
  private messageCount = 0;
  create(message: string) {
    // Create a new toast
    this.messages.next(message);
  }
  getMessages(): Observable<string> {
    return this.messages.asObservable();
  }

  increaseMessagCount() {
    this.messageCount = this.messageCount + 1;
  }

  getMessageCount(): number {
    return this.messageCount;
  }
}
