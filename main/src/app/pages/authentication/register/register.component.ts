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
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  // get f() {
  //   return this.signupForm.controls;
  // }

  get controls(): { [p: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  constructor(private router: Router, private authService: AuthService) {}


  onSubmit(newAccountDetails: SignUpAuth) {
    const firstName= newAccountDetails.firstName.trim();
    const lastName = newAccountDetails.lastName.trim();
    const email = newAccountDetails.email.trim();
    const password = newAccountDetails.password.trim();
    
    
    // console.log(this.signupForm.value);
    this.authService.clientSignup({firstName, lastName, email, password})
    .subscribe(
     {next: (data) => this.router.navigateByUrl("authentication/login"),
      error:(err)=> console.log(err)}
    )
    
  }
}
