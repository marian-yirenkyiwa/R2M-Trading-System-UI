import { Component } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent {
  displayedColumns: string[] = ['orderId', 'product', 'quantity', 'orderSide', 'orderType', 'price', 'action'];
  color="cadetblue"   

}
