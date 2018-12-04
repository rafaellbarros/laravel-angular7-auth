import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  isCollapsed = true;
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
