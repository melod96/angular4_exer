import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messages : string[] = [];
  
  // message를 추가
  add ( message : string ) {
    this.messages.push(message);
  }

  // messages를 초기화
  clear() {
    this.messages = [];
  }

  constructor() { }
}
