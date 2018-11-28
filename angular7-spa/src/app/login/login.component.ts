import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public login() {

  this.serviceLogin()
          .subscribe(response => {
            console.warn(response);
          }, error => {
            console.error(error);
        });
  }

  private serviceLogin = () =>
      this.http.post('http://localhost:8000/api/login', this.user, {observe: 'response'});

}
