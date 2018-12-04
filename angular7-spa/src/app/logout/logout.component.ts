import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  percent: number = 0;
  redirectAfterLogout = ['/login'];

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    setInterval(() => {
      this.percent += 10;
      if (this.percent === 100) {

        this.router.navigate(this.redirectAfterLogout);
      }
    }, 300);
  }

  ngOnInit() {
    this.logout();
  }

}
