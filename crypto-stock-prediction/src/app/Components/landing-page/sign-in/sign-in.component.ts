import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  // public form: FormGroup;
  // public formCorporate: FormGroup;
  // public CountryISO = CountryISO;
  // public httpRequest: XMLHttpRequest;

  public errorRegisterForm = false;
  public errors = {
    firstName: {
      error: false,
      message: 'Le prénom est obligatoire',
    },
    lastName: {
      error: false,
      message: 'Le nom est obligatoire',
    },
    socialNumber: {
      length: {
        error: false,
        message: 'Le numéro de sécurité sociale doit faire 15 chiffres',
      },
      invalid: {
        error: false,
        message: 'Le numéro de sécurité sociale est incorrect',
      },
    },
    email: {
      error: false,
      message: `Format d'email incorrect`,
    },
    password: {
      error: false,
      message:
        'Doit contenir 10 caractères, 1 majuscule, 1 miniscule, 1 chiffre, 1 caractère spécial',
    },
    confirmationPassword: {
      error: false,
      message: 'Les deux champs doivent correspondre',
    },
    fullBirth: false,
    phoneNumber: false,
  };

  constructor() {}

  ngOnInit(): void {
    this.initRegisterForm();
    this.loadUserData();
  }

  loadUserData() {}

  initRegisterForm() {}

  emailValidator(control: FormControl) {}

  passwordValidator(control: FormControl) {}

  passwordConfirming(c: FormControl) {}
}
