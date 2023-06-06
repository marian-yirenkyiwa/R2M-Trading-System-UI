import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Portfolio, PortfolioResponse } from '../models/portfolio.model';
import { PortfolioTable } from '../models/portfolio-table.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getAllClientPortfolio(){
    const url = "http://localhost:8081/api/portfolio/list-all-portfolio/{clientId}";
    return this.http.get(url);

  }

  createNewPortfolio(payload: Portfolio){
    const url = "http://localhost:8081/api/portfolio/create-portfolio";
    return this.http.post(url, payload);
  }

  viewAllPortfolio(payload: PortfolioTable){
    const url = "http://localhost:8081/api/portfolio//list-all-portfolio/{clientId}";
    return this.http.get(url);
  }
}
