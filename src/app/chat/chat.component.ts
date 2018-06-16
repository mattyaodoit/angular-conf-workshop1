import { Component, OnInit, Input } from '@angular/core';
import { ClientWrapper } from '../client-wrapper';
import { Observable } from 'rxjs';
import { ClientState } from 'meetup-chat-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

  @Input() clientState: ClientState

  dummyUser = { "name": "Dummy user", "isConnected": false, "isTyping": false, "id": 1, "avatarUrl": "https://robohash.org/Dummy user?size=128x128" }


  constructor() { }

  getAvatar(senderId, users) {
    return users.find(user => user.id === senderId).avatarUrl;
  }

  ngOnInit() {
  }
}