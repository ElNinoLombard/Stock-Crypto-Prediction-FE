import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public errors = {
    email: {
      error: false,
      message: `Format d'email incorrect`,
    },
    password: {
      error: false,
      message: 'Le mot de passe est obligatoire',
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.initLoginForm();
    this.setLoginErrorDebounce();
  }

  initLoginForm() {}

  setLoginErrorDebounce() {}

  handlePasswordError() {}

  handleEmailError() {}

  handleLogin() {}

  handleLoginError() {}

  handleLoginSuccess() {}
}
