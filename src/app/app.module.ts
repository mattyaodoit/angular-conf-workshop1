import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';
import { ClientWrapper } from './client-wrapper';
import { ChatComponent } from './chat/chat.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AppComponent, MessageComponent, NewMessageFormComponent, ChatComponent, UserComponent],
  providers: [ClientWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
