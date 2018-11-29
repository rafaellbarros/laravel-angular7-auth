import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private jwtTokenService: JwtTokenService) { }

  public getProducts = () => this.http.get(`${this.URL}/products`, this.getOptions());

  private getOptions() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.jwtTokenService.token}`,
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers
    };
    console.log(options);
    return options;
  }


}
