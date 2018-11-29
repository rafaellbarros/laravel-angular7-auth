import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor(private localStorageService: LocalStorageService) { }

  get token() {
    return this.localStorageService.get(TOKEN_KEY);
  }

  set token(value) {
    value ? this.localStorageService.set(TOKEN_KEY, value) : this.localStorageService.remove(TOKEN_KEY);
  }
}
