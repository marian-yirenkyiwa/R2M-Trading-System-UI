import { Component } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {
  displayedColumns: string[] = ['orderId', 'product', 'quantity', 'orderSide', 'orderType', 'price'];
  color="cadetblue" 
}
