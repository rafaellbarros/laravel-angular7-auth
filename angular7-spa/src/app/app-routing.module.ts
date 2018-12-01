import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AuthGuardRouterService } from './services/auth-guard-router.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardRouterService] },
  { path: 'products/list', component: ProductListComponent, canActivate: [AuthGuardRouterService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
