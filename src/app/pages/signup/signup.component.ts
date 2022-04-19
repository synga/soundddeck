import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public form = {
    name: null,
    email: null,
    password: null,
  };

  constructor() {}

  createAccount(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
