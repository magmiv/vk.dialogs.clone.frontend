import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  buttonPanelContent: {
    button: 'Войти' | 'Зарегистрироваться',
    span: 'Зарегистрироваться' | 'Есть аккаунт?'
  } = {
      button: 'Войти',
      span: 'Зарегистрироваться'
    };

  nameText: string;
  passwordText: string;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    if (this.router.url === '/login') {
      this.buttonPanelContent.button = 'Войти';
      this.buttonPanelContent.span = 'Зарегистрироваться';
    }
    if (this.router.url === '/register') {
      this.buttonPanelContent.button = 'Зарегистрироваться';
      this.buttonPanelContent.span = 'Есть аккаунт?';
    }
  }

  ngOnInit() {
  }

  redirectAtAnotherPage() {
    if (this.router.url === '/login') {
      this.router.navigateByUrl('/register');
    }
    if (this.router.url === '/register') {
      this.router.navigateByUrl('/login');
    }
  }

  onSubmit() {
    if (!this.isFormValid()) { return; }

    if (this.router.url === '/login') {
      this.login();
    }
    if (this.router.url === '/register') {
      this.register();
    }
  }

  login() {
    this.http.get(`http://localhost:3000/auth?name=${this.nameText}&password=${this.passwordText}`)
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }

  register() {
    this.http.post(`http://localhost:3000/register`, {
      name: this.nameText,
      password: this.passwordText
    })
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }

  isFormValid() {
    return this.nameText && this.passwordText;
  }

}
