import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import { of } from 'rxjs';
import { LoginAuth } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

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

  constructor(private authService: AuthService, private router: Router, private location: Location) {}

  onSubmit(loginDetails: LoginAuth){
    const email = loginDetails.email.trim();
    const password = loginDetails.password.trim();

    this.authService.clientLogin({email, password})
    .subscribe(
      {next: (data) =>  {
        console.log(data);
        if(data !== null && data.token)
        {
         
          window.localStorage.setItem("auth", data.token)
          this.router.navigateByUrl("/dashboard")
        }
      },
        // this.toaster.success('Logged In Successfully', 'Login');
        // this.router.navigateByUrl("/dashboard"),
        // this.location.replaceState('/dashboard');
      
        error:(err)=> console.log(err)}
    )
    
  }
}
