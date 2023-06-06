import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import { of } from 'rxjs';
import { LoginAuth } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(['', [Validators.required, Validators.email]]),
    password: new FormControl(['', [Validators.required]])
  })

  get controls(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(loginDetails: LoginAuth){
    const email = loginDetails.email.trim();
    const password = loginDetails.password.trim();

    this.authService.clientLogin({email, password})
    .subscribe(
      data=> console.log("Success!", data)
    )
    // this.router.navigate(['/dashboard']);


  }
}
