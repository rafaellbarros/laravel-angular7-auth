import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { JwtTokenService } from '../services/jwt-token.service';
import { map } from 'rxjs/operators';

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

  constructor(private http: HttpClient, private jwtTokenService: JwtTokenService) { }

  ngOnInit() {
  }

  public login() {

  this.serviceLogin()
          .subscribe(response => {
            this.jwtTokenService.token = response.token;
            console.warn(response);
          }, error => {
            console.error(error);
        });
  }

  private serviceLogin = () =>
      this.http.post('http://localhost:8000/api/login', this.user)

}
