import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private jwtTokenService: JwtTokenService,
    private router: Router,
    private authService: AuthService) { }

  public login = (user) => this.http.post('http://localhost:8000/api/login', user).pipe(
    map(resp => {
      this.authService.check = true;
      this.jwtTokenService.token = resp['token'];
    })
  )

}
