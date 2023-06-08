import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthTokenInterceptorInterceptor implements HttpInterceptor {
  token: string|null;

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request is on its way');
    this.token = window.localStorage.getItem('auth');
    if (this.token != null) {
        const modifiedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        console.log(modifiedRequest);
       return next.handle(modifiedRequest);
    }
   
    return next.handle(request);
  }
    
    // const jwt = this.authService.getToken()
    // return next.handle(request);
  
}
