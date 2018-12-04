import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultRequestOptionsService implements HttpInterceptor   {

  constructor(private jwtTokenService: JwtTokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const authToken = `Bearer ${this.jwtTokenService.token}`;
    const authReq = req.clone({
      setHeaders: { Authorization: authToken, ContentType: 'application/json'}
    });
    return next.handle(authReq);
  }

}
