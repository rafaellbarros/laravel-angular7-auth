import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

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

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.localStorageService.set('nome', 'rafael')
          .set('curso','angular 7');

          console.log(this.localStorageService.get('nome'));
          console.log(this.localStorageService.get('curso'));
          console.log(this.localStorageService.get('nada'));

          this.localStorageService.setObject('object', {
            'nome': 'Rafael Barros'
          });

          console.log(this.localStorageService.getObject('object'));

          console.log(this.localStorageService.getObject['object1']);
          this.localStorageService.remove('nome').remove('curso').remove('object');
  }

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
