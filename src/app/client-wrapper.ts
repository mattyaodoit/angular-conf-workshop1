import { ChatClient } from "meetup-chat-client";
import { NgModule, Injectable } from '@angular/core';

const chatClient = ChatClient.connect(
  "https://serene-basin-84996.herokuapp.com/"
);

@Injectable()
export class ClientWrapper {
  client = chatClient;
}