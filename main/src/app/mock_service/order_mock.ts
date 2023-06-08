import { OrderModel, OrderResponse } from "../models/order.model";

export class OrderMock{
    order: OrderResponse[]

    addOrder(orderModel: OrderModel): OrderResponse {
        let orderResponse: OrderResponse = {
            orderId: (this.order.length + 1).toString(),
            product: orderModel.product,
            quantity: orderModel.quantity,
            side: orderModel.side,
            type: orderModel.type,
            price: orderModel.price,
            dateTimeCreated: Date.now().toString()
        };
        // orderResponse.orderid = 

        this.order.push(orderResponse)
        return orderResponse
    }

    getOrders(): OrderResponse[] {
        return this.order
    }

    getOrderById(id: string): OrderResponse{
       return this.order.filter(value => value.orderId === id)[0]
    }
}