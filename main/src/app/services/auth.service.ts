import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginAuth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  payload: LoginAuth = {email: 'marian@gmail.com', password: '123'};

  // payload: LoginAuth 
  clientLogin(payload: LoginAuth){
    // const url = '';
    // this.http.post(url, payload);
    // console.log(this.payload)
    console.log(payload)
    return of(this.payload)
  }

}
