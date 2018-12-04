import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from '../login/login.component';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL = 'http://localhost:8000/api';

  public user = {
    name: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }


  public getLogin(userLogin) {
    return this.authService.login(userLogin).pipe(map( resp => resp));
  }


}
