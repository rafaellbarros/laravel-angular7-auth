import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule, ProgressbarModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

