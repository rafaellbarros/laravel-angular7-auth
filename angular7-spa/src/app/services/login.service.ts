import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private jwtTokenService: JwtTokenService) { }

  public login = (user) => this.http.post('http://localhost:8000/api/login', user).pipe(
    map(resp => this.jwtTokenService.token = resp['token'])
  )

}
