import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import { of } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { OrderModel } from './order.model';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit{


  orderForm = new FormGroup({
    product: new FormControl(['', [Validators.minLength, Validators.required]]),
    quantity: new FormControl(['', [Validators.min(1),Validators.required]]),
    orderside: new FormControl(['', [Validators.required]]),
    ordertype: new FormControl(['', [Validators.required]]),
    price: new FormControl(['', [Validators.min(1),Validators.required]])
  })

  constructor(private formBuilder: FormBuilder, private orderService: OrderService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

payload: OrderModel;
  onSubmit(payload: OrderModel ) {
    console.log(payload)
    this.orderService.getNewOrder(payload)
    .subscribe(
      data=> console.log("Success!", data),
      // error => console.error("!Error", error)
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

}
