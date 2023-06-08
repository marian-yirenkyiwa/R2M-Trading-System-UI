import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { OrderModel } from '../../models/order.model';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit{

  orderForm: FormGroup = new FormGroup({
    product: new FormControl(['', [Validators.minLength, Validators.required]]),
    quantity: new FormControl(['', [Validators.min(1),Validators.required]]),
    side: new FormControl(['', [Validators.required]]),
    type: new FormControl(['', [Validators.required]]),
    price: new FormControl(['', [Validators.min(1),Validators.required]])
  })


  constructor(private orderService: OrderService, private router: Router){}
  ngOnInit(): void {}


  onSubmit(orderDetails: OrderModel) {
    const product = orderDetails.product.trim();
    const quantity = Number(orderDetails.quantity);
    const side = orderDetails.side.trim();
    const type = orderDetails.type.trim();
    const price = Number(orderDetails.price);

    // console.log(this.orderForm.value)
     this.orderService.createOrder({product, quantity, side, type, price})
    //   .subscribe(
    //   data=> console.log("Success!", data)
    //   error => console.error("!Error", error)
    // )
    .subscribe(
      {next: (data) => {
        console.log("Success!", data), this.router.navigateByUrl("/history")
      },
       error:(err)=> console.log(err)}
     )
    

  }

  get controls(): { [p: string]: AbstractControl } {
    return this.orderForm.controls;
  }

  selectedValue: string;

  ordertypes: any [] = [
    {value: 'MARKET', viewValue: 'MARKET'},
    {value: 'LIMIT', viewValue: 'LIMIT'}
  ];

  ordersides: any [] = [
    {value: 'SELL', viewValue: 'SELL'},
    {value: 'BUY', viewValue: 'BUY'}
  ];

  products: any [] = [
    {value: 'AMZN', viewValue: 'AMZN'},
    {value: 'GOOGL', viewValue: 'GOOGL'},
    {value: 'AAPL', viewValue: 'AAPL'},
    {value: 'MSFT', viewValue: 'MSFT'},
    {value: 'IBM', viewValue: 'IBM'},
    {value: 'NFLX', viewValue: 'NFLX'},
    {value: 'TSLA', viewValue: 'TSLA'},
    {value: 'TSLA', viewValue: 'TSLA'},
    {value: 'ORCL', viewValue: 'ORCL'}
   
  ];

}
