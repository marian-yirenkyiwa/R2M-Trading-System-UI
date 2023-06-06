import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginAuth, LoginResponse, SignUpResponse } from '../models/auth.model';
import { SignUpAuth } from '../models/auth.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,) { }

  // payload: LoginAuth = {email: 'marian@gmail.com', password: '123'};

  // payload: LoginAuth 
  clientLogin(payload: LoginAuth){
    const url = 'http://localhost:8081/api/auth/authenticate'
    // var existToken = window.localStorage.getItem("auth");
    return this.http.post<LoginResponse>(url, payload)
  }


  clientSignup(payload: SignUpAuth): Observable<SignUpResponse>{
    const url = 'http://localhost:8081/api/auth/register';
    return this.http.post<SignUpResponse>(url, payload)
  }

}
