import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {Portfolio} from "../../models/portfolio.model";

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolioForm = new FormGroup({
    portfolioName: new FormControl(['', [Validators.required]])
    // portfolioworth: new FormControl(['', {value: '0.00', disabled: true}, [Validators.required]])
  })

    selectedValue: string;

    portfolioNames: any [] = [
      // {value: 'DEFAULT', viewValue: 'DEFAULT'},
      {value: 'TECH', viewValue: 'TECH'},
      {value: 'AGRIC', viewValue: 'AGRIC'},
      {value: 'CRYPTO', viewValue: 'CRYPTO'}
  ];

  constructor(private portfolioService: PortfolioService, private router: Router){}

  // payload: Portfolio;
  onSubmit(payload: Portfolio) {
    const portfolioName = payload.portfolioName
    console.log("Success");
    this.portfolioService.createNewPortfolio({portfolioName})
    .subscribe(
      {next: (data) => {console.log("Successful!"), this.router.navigateByUrl("/dashboard")},
       error:(err)=> console.log(err)}
     )

  }
}

// this.router.navigateByUrl("/dashboard")
