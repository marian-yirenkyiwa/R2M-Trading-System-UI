export interface OrderModel {
    product: string;
    quantity: number;
    orderside: string;
    ordertype: string;
    price: number;
}


export interface OrderResponse {
  orderid: string;
  product: string;
  quantity: number;
  orderside: string;
  ordertype: string;
  price: number;
  dateTimeCreated: string;

}
