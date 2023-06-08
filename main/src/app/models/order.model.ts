export interface OrderModel {
    product: string;
    quantity: number;
    side: string;
    type: string;
    price: number;
}


export interface OrderResponse {
  orderId: string;
  product: string;
  quantity: number;
  side: string;
  type: string;
  price: number;
  dateTimeCreated: string;

}
