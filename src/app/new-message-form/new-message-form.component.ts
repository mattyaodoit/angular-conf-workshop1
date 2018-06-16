import { Component, OnInit } from '@angular/core';
import { ClientWrapper } from '../client-wrapper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit {

  newMessageform: FormGroup;

  constructor(private wrapper: ClientWrapper, formBuilder: FormBuilder) {
    this.newMessageform = formBuilder.group({
      message: ''
    });
  }

  sendMessage(): void {
    this.wrapper.client.sendMessage({
      text: this.newMessageform.value.message
    });
    this.newMessageform.reset();
  }

  ngOnInit() {
  }

}