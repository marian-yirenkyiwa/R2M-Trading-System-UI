import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portfolio, PortfolioResponse } from 'src/app/models/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'all-portfolio', 
  templateUrl: './all-portfolio.component.html',
  styleUrls: ['./all-portfolio.component.scss']
})
export class AllPortfolioComponent implements OnInit{

  portfolios: PortfolioResponse [] = [];

  constructor(private portfolioService: PortfolioService, private router: Router){}
  ngOnInit(): void {
    this.portfolioService.getClientPortfolio()
      .subscribe(
        (data: PortfolioResponse[]) => 
        this.portfolios = data
      )
  }
 
  
  

  displayedColumns: string[] = ['portfolioId', 'portfolioName', 'dateCreated', 'portfolioWorth', 'clientId'];
  color="cadetblue"                                                         

}

