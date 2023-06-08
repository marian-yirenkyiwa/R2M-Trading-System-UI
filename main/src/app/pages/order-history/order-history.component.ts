import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderResponse } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit{

  orders: OrderResponse[] = [];

  constructor(private orderService: OrderService, private router: Router){}

  ngOnInit(): void {
    // this.orderService
    // .getAllOrders()
    // .subscribe(
    //   {next: (value) => {
    //     {this.orders = value}
    //   },
    //    error:(err)=> console.log(err)}
    //  )

  }

  displayedColumns: string[] = ['orderId', 'product', 'quantity', 'orderSide', 'orderType', 'price'];
  color="cadetblue" 
}
