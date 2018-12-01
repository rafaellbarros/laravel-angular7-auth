import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { JwtTokenService } from '../services/jwt-token.service';
import { map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  redirectAfterLogin = ['/products/list'];

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.loginService.login(this.user).subscribe(resp => {
      console.log(resp);
      this.router.navigate(this.redirectAfterLogin);
    }, error => {
      console.error(error);
    });
  }
}
