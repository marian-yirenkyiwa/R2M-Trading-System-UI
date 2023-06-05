import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Portfolio} from "./portfolio.model";

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolioForm = new FormGroup({
    portfolioname: new FormControl(['', [Validators.required]]),
    portfolioworth: new FormControl(['', [Validators.min(0.00),Validators.required]])
  })

    selectedValue: string;

    portfolionames: any [] = [
      {value: 'DEFAULT', viewValue: 'DEFAULT'},
      {value: 'TECH', viewValue: 'TECH'},
      {value: 'AGRIC', viewValue: 'AGRIC'},
      {value: 'CRYPTO', viewValue: 'CRYPTO'}
  ];

  payload: Portfolio;
  onSubmit(value: any) {

  }
}
