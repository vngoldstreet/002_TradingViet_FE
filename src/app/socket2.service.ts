import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class Websocket2 {
  private ws!: WebSocket;
  private subject!: Subject<any>;

  constructor() { }

  public connect(urlInput: string): Observable<any> {
    if (!this.subject) {
      this.subject = this.create(urlInput);
    }
    return this.subject.asObservable();
  }

  create(url: string) {
    this.ws = new WebSocket(url);
    const observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this.ws.onmessage = obs.next.bind(obs);
        this.ws.onerror = obs.error.bind(obs);
        // this.ws.onclose = obs.complete.bind(obs);
        this.ws.onclose = function () {
          console.log("Lỗi kết nối!")
        }
        return this.ws.close.bind(this.ws);
      });

    const observer = {
      next: (data: Object) => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }

  public disconect() {
    this.ws.close()
  }

}
