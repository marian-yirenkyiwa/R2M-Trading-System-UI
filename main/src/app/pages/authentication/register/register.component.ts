import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpAuth } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {

  signupForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  // get f() {
  //   return this.signupForm.controls;
  // }

  get controls(): { [p: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  constructor(private router: Router, private authService: AuthService) {}


  onSubmit(newAccountDetails: SignUpAuth) {
    const firstname= newAccountDetails.firstname.trim();
    const lastname = newAccountDetails.lastname.trim();
    const email = newAccountDetails.email.trim();
    const password = newAccountDetails.password.trim();
    
    
    // console.log(this.signupForm.value);
    this.authService.clientSignup({firstname, lastname, email, password})
    .subscribe(
      data=> console.log("Success!", data)
    )
    // this.router.navigate(['/authentication/login']);
  }
}
