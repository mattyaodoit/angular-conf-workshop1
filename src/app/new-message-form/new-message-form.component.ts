import { Component, OnInit } from '@angular/core';
import { ClientWrapper } from '../client-wrapper';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit {

  constructor( private wrapper: ClientWrapper) { }

  ngOnInit() {
  }

}