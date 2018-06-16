import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ClientWrapper } from './client-wrapper';
import { Observable } from 'rxjs';
import { ClientState } from 'meetup-chat-client';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  clientState: ClientState

  constructor(private wrapper: ClientWrapper, private ref: ChangeDetectorRef) {
  }

  getAvatar(id, users) {
    return users.find(user => user.id === id).avatarUrl;
  }

  ngOnInit() {
    this.wrapper.client.stateChanges.subscribe(value => {
      this.clientState = value;
      this.ref.detectChanges();
    });
  }
}
