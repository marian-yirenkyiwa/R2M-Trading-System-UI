import { Component } from '@angular/core';

@Component({
  selector: 'app-close-portfolio',
  templateUrl: './close-portfolio.component.html',
  styleUrls: ['./close-portfolio.component.scss']
})
export class ClosePortfolioComponent {
  displayedColumns: string[] = ['portfolioId', 'portfolioName', 'dateCreated', 'portfolioWorth', 'clientId', 'action'];
  color="cadetblue" 

}
