import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class ToastService {
  private messages = new Subject<string>();
  create(message: string) {
    // Create a new toast
    this.messages.next(message);
  }
  getMessages(): Observable<string> {
    return this.messages.asObservable();
  }
}
