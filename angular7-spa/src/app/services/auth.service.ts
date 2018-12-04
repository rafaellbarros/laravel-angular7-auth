import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';
import { LocalStorageService } from './local-storage.service';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8000/api';

  public check: Boolean = false;

  public user = {
    name: ''
  };

  constructor(
    private jwtTokenService: JwtTokenService,
    private http: HttpClient,
    private localStorage: LocalStorageService) {
    this.check = this.jwtTokenService.token ? true : false;
    const userLocalStorage = this.localStorage.getObject(USER_KEY);
    this.user = userLocalStorage ? userLocalStorage : {
        name: ''
    };
  }

  public login(user) {
    return this.http.post(`${this.API_URL}/login`, user).pipe(
      map(resp => {
        this.check = true;
        this.jwtTokenService.token = resp['token'];
        this.getUser();
        return resp;
      })
    );
  }

  logout() {
    this.jwtTokenService.token = null;
    this.check = false;
    this.localStorage.remove(USER_KEY);
  }

  private getUser() {
     this.http
        .get(`${this.API_URL}/user`).subscribe(resp => {
          this.user = resp['user'];
          this.localStorage.setObject(USER_KEY, this.user);
        });
  }

}
