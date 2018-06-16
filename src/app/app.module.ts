import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';
import { ClientWrapper } from './client-wrapper';
import { ChatComponent } from './chat/chat.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, MessageComponent, NewMessageFormComponent, ChatComponent, UserComponent, HeaderComponent, LoginComponent],
  providers: [ClientWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
