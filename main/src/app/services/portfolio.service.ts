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

  createNewPortfolio(payload: Portfolio): Observable<PortfolioResponse>{
    const url = "http://localhost:8081/api/portfolio/create-portfolio";
    return this.http.post<PortfolioResponse>(url, payload);
  }

  getClientPortfolio(): Observable<PortfolioResponse[]>{
    const url = "http://localhost:8081/api/portfolio/list-all-portfolio/{clientId}";
    console.log(this.http.get<PortfolioResponse>(url));
    return this.http.get<PortfolioResponse[]>(url);
  }

}
