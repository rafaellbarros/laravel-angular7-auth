import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { JwtTokenService } from '../services/jwt-token.service';
import { map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

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

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public login() {
    this.loginService.login(this.user).subscribe(resp => {
      console.log(resp);
    }, error => {
      console.error(error);
    });
  }
}
