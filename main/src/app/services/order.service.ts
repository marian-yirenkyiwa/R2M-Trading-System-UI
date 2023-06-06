import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { OrderModel } from '../models/order.model';
import { OrderResponse } from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{


  // orders = [
  //             {id: 1, product: "MICROSOFT", orderSide: "BUY", orderType: "MARKET"},
  //             {id: 2, product: "GOOGLE", orderSide: "BUY", orderType: "MARKET"},
  //             {id: 3, product: "NETFLIX", orderSide: "SELL", orderType: "LIMIT"}
  // ]

  // newOrder = 
  //   { product: 'NFLX',
  //     quantity: 12,
  //     orderside: 'SELL',
  //     ordertype: 'MARKET',
  //     price: 5.00,
  //   }
  

  constructor(private http: HttpClient) { }
  
  getNewOrder(newOrder: OrderModel){
    const url = '';
    // return this.http.post<OrderResponse>(url, newOrder);
    return of(newOrder);

  }


  ngOnInit(): void {

  }
}
