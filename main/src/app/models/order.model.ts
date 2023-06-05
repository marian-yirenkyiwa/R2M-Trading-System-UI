export interface OrderModel {
    product: string;
    quantity: number;
    orderside: string;
    ordertype: string;
    price: number;
}


export interface OrderResponse {
  orderid: number;
  product: string;
  quantity: number;
  orderside: string;
  ordertype: string;
  price: number;
  dateTimeCreated: Date;

}
