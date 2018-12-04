import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtTokenService } from './jwt-token.service';
import { AuthService } from './auth.service';
import { DefaultRequestOptionsService } from './default-request-options.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient) { }

  public getProducts = () => this.http.get(`${this.URL}/products`);

}
