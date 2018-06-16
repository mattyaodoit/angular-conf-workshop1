import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientWrapper } from '../client-wrapper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  @Output() onLogin = new EventEmitter();

  constructor(formBuilder: FormBuilder, private wrapper: ClientWrapper) {
    this.form = formBuilder.group({
      username: ''
    });
  }

  login(): void {
    this.wrapper.client.tryLogin(this.form.value.user);
  }

  ngOnInit() {
  }

}
