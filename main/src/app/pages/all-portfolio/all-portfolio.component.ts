import { Component } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio.model';

@Component({
  selector: 'all-portfolio', 
  templateUrl: './all-portfolio.component.html',
  styleUrls: ['./all-portfolio.component.scss']
})
export class AllPortfolioComponent {
  displayedColumns: string[] = ['portfolioId', 'portfolioName', 'dateCreated', 'portfolioWorth', 'clientId'];
  color="cadetblue"                                                         

}
