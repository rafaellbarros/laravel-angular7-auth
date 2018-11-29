import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public check: Boolean = false;

  constructor(private jwtTokenService: JwtTokenService) {
    this.check = this.jwtTokenService.token ? true : false;
  }
}
