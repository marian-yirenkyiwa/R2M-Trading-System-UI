import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { OrderModel } from '../models/order.model';
import { OrderResponse } from "../models/order.model";
import { OrderMock } from '../mock_service/order_mock';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{

  //  orderMock = new OrderMock();

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


  
  createOrder(payload: OrderModel):Observable<OrderResponse>{
    const url = 'http://localhost:9090/api/v1/orders/order';
    return this.http.post<OrderResponse>(url, payload)   
  }

  getAllOrders(){
    const url = 'http://localhost:9090/api/v1/orders/all';
    console.log(this.http.get<OrderResponse[]>(url));
    return this.http.get<OrderResponse[]>(url);
  }

  getOrderById(id: string){
    // this.orderMock.getOrderById(id)
  }

  ngOnInit(): void {

  }
}
