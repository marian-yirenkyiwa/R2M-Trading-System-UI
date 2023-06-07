import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
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
    orderside: new FormControl(['', [Validators.required]]),
    ordertype: new FormControl(['', [Validators.required]]),
    price: new FormControl(['', [Validators.min(1),Validators.required]])
  })

  // order: OrderModel = {product: "", quantity: 0, orderside: "", ordertype: "", price: 0}


  constructor(private orderService: OrderService){}
  ngOnInit(): void {}

// payload: OrderModel;

  onSubmit(orderDetails: OrderModel) {
    const product = orderDetails.product.trim();
    const quantity = Number(orderDetails.quantity);
    const orderside = orderDetails.orderside.trim();
    const ordertype = orderDetails.ordertype.trim();
    const price = Number(orderDetails.price);

    // console.log(this.orderForm.value)
     this.orderService.createOrder({product, quantity, orderside, ordertype, price})
    //   .subscribe(
    //   data=> console.log("Success!", data)
    //   error => console.error("!Error", error)
    // )
   
   
   
     // console.log(order);


    

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

}
